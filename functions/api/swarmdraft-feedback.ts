import {
    isRateLimited,
    normalizeResendFrom,
    sendResend,
} from "../../lib/email.ts";
import {
    MAX_BODY_BYTES,
    buildFeedbackEmail,
    validateClientHeader,
    validateFeedbackBody,
} from "../../lib/swarmdraft-feedback.ts";

interface Env {
    RESEND_API_KEY: string;
    CONTACT_TO: string;
    RESEND_FROM: string;
    SWARMDRAFT_FEEDBACK_TO?: string;
    SWARMDRAFT_FEEDBACK_FROM?: string;
}

const IP_LIMIT = { max: 5, windowSeconds: 600 };
const INSTALL_LIMIT = { max: 10, windowSeconds: 86400 };

function feedbackUnavailable(): Response {
    return Response.json({ error: "feedback_unavailable" }, { status: 503 });
}

function resolveFeedbackEnv(
    env: Env,
): { apiKey: string; to: string; from: string } | null {
    const apiKey = env.RESEND_API_KEY?.trim();
    const to =
        (env.SWARMDRAFT_FEEDBACK_TO?.trim() || env.CONTACT_TO?.trim()) ?? "";
    const fromRaw =
        env.SWARMDRAFT_FEEDBACK_FROM?.trim() || env.RESEND_FROM?.trim() || "";
    const from = normalizeResendFrom(fromRaw);
    if (!apiKey || !to || !from) {
        return null;
    }
    return { apiKey, to, from };
}

export async function onRequestPost(context: {
    request: Request;
    env: Env;
}): Promise<Response> {
    const { request, env } = context;

    if (request.headers.get("Origin")) {
        return Response.json(
            { message: "Origin not allowed." },
            { status: 403 },
        );
    }

    // Not a secret — filters casual HTTP noise; the desktop app sends desktop/<semver>.
    const clientHeader = request.headers.get("X-SwarmDraft-Client");
    if (!validateClientHeader(clientHeader)) {
        return Response.json(
            {
                errors: {
                    client: [
                        "The X-SwarmDraft-Client header must be desktop/<semver>.",
                    ],
                },
            },
            { status: 422 },
        );
    }

    const contentLength = request.headers.get("Content-Length");
    if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
        return Response.json(
            { message: "Request body too large." },
            { status: 400 },
        );
    }

    const rawText = await request.text();
    if (rawText.length > MAX_BODY_BYTES) {
        return Response.json(
            { message: "Request body too large." },
            { status: 400 },
        );
    }

    let body: Record<string, unknown>;
    try {
        body = JSON.parse(rawText) as Record<string, unknown>;
    } catch {
        return Response.json(
            { message: "Invalid JSON body." },
            { status: 400 },
        );
    }

    const { errors, payload } = validateFeedbackBody(body);
    if (errors) {
        return Response.json({ errors }, { status: 422 });
    }
    if (!payload) {
        return Response.json({ message: "Invalid feedback." }, { status: 400 });
    }

    // Best-effort per-PoP limits; enough for the pilot (same Cache API pattern as contact).
    if (
        await isRateLimited({
            prefix: "feedback-ip",
            identifier: request.headers.get("CF-Connecting-IP") ?? "unknown",
            maxRequests: IP_LIMIT.max,
            windowSeconds: IP_LIMIT.windowSeconds,
        })
    ) {
        return Response.json(
            { message: "Too many requests. Try again later." },
            { status: 429 },
        );
    }
    if (
        await isRateLimited({
            prefix: "feedback-install",
            identifier: payload.installId,
            maxRequests: INSTALL_LIMIT.max,
            windowSeconds: INSTALL_LIMIT.windowSeconds,
        })
    ) {
        return Response.json(
            { message: "Too many requests. Try again later." },
            { status: 429 },
        );
    }

    const mailEnv = resolveFeedbackEnv(env);
    if (!mailEnv) {
        return feedbackUnavailable();
    }

    const email = buildFeedbackEmail(payload);
    const idempotencyKey = `${payload.installId}:${payload.nonce}`;

    try {
        const res = await sendResend(
            mailEnv.apiKey,
            {
                from: mailEnv.from,
                to: [mailEnv.to],
                subject: email.subject,
                text: email.text,
                html: email.html,
                reply_to: payload.replyEmail,
                attachments: email.attachments,
            },
            idempotencyKey,
        );

        if (!res.ok) {
            return feedbackUnavailable();
        }
    } catch {
        return feedbackUnavailable();
    }

    return Response.json({ ok: true }, { status: 202 });
}
