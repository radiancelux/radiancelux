import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { onRequestPost } from "./swarmdraft-feedback.ts";

const installId = "550e8400-e29b-41d4-a716-446655440000";

const env = {
    RESEND_API_KEY: "re_test_key_abc",
    CONTACT_TO: "inbox@example.com",
    RESEND_FROM: "Radiance Lux <contact@example.com>",
    SWARMDRAFT_FEEDBACK_TO: "feedback@example.com",
};

const validBody = {
    area: "editor",
    type: "bug",
    description: "Crash on save",
    appVersion: "0.1.0",
    os: "Windows 11",
    installId,
    nonce: "nonce-42",
    source: "app",
};

function makeRequest(
    body: unknown,
    headers: Record<string, string> = {},
): Request {
    return new Request("https://radiancelux.tech/api/swarmdraft-feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-SwarmDraft-Client": "desktop/0.1.0",
            "CF-Connecting-IP": "203.0.113.10",
            ...headers,
        },
        body: JSON.stringify(body),
    });
}

function mockCache(initial: Record<string, number> = {}) {
    const store = new Map<string, number>(Object.entries(initial));
    const cache = {
        match: vi.fn(async (key: Request) => {
            const count = store.get(key.url);
            return count === undefined
                ? undefined
                : new Response(String(count));
        }),
        put: vi.fn(async (key: Request, res: Response) => {
            store.set(key.url, Number(await res.text()));
        }),
    };
    vi.stubGlobal("caches", { default: cache });
    return cache;
}

describe("swarmdraft-feedback onRequestPost", () => {
    beforeEach(() => {
        mockCache();
        vi.stubGlobal(
            "fetch",
            vi.fn(async () => new Response("{}", { status: 200 })),
        );
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it("returns 503 when env is incomplete", async () => {
        const res = await onRequestPost({
            request: makeRequest(validBody),
            env: { ...env, RESEND_API_KEY: "" },
        });
        expect(res.status).toBe(503);
        expect(await res.json()).toEqual({ error: "feedback_unavailable" });
    });

    it("returns 422 without client header", async () => {
        const res = await onRequestPost({
            request: new Request(
                "https://radiancelux.tech/api/swarmdraft-feedback",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "CF-Connecting-IP": "203.0.113.10",
                    },
                    body: JSON.stringify(validBody),
                },
            ),
            env,
        });
        expect(res.status).toBe(422);
    });

    it("returns 202 and sends Resend payload with idempotency", async () => {
        const fetchMock = vi.mocked(fetch);
        const res = await onRequestPost({
            request: makeRequest(validBody),
            env,
        });
        expect(res.status).toBe(202);
        expect(await res.json()).toEqual({ ok: true });

        expect(fetchMock).toHaveBeenCalledOnce();
        const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
        expect(url).toBe("https://api.resend.com/emails");
        const headers = init.headers as Record<string, string>;
        expect(headers.Authorization).toBe("Bearer re_test_key_abc");
        expect(headers["Idempotency-Key"]).toBe(`${installId}:nonce-42`);

        const payload = JSON.parse(init.body as string);
        expect(payload.from).toBe("Radiance Lux <contact@example.com>");
        expect(payload.to).toEqual(["feedback@example.com"]);
        expect(payload.subject).toContain("[swarmDraft feedback]");
    });

    it("includes screenshot attachment when provided", async () => {
        const png = btoa("fake-png-bytes");
        const fetchMock = vi.mocked(fetch);
        await onRequestPost({
            request: makeRequest({ ...validBody, screenshotPng: png }),
            env,
        });
        const init = fetchMock.mock.calls[0][1] as RequestInit;
        const payload = JSON.parse(init.body as string);
        expect(payload.attachments).toEqual([
            { filename: "screenshot.png", content: png },
        ]);
    });

    it("returns 429 when install rate limit exceeded", async () => {
        mockCache({
            [`https://rate-limit.radiancelux.internal/feedback-install/${encodeURIComponent(installId)}`]: 10,
        });
        const res = await onRequestPost({
            request: makeRequest(validBody),
            env,
        });
        expect(res.status).toBe(429);
    });

    it("never logs the API key", async () => {
        const logSpy = vi.spyOn(console, "log");
        const errorSpy = vi.spyOn(console, "error");
        await onRequestPost({ request: makeRequest(validBody), env });
        for (const call of [...logSpy.mock.calls, ...errorSpy.mock.calls]) {
            expect(JSON.stringify(call)).not.toContain(env.RESEND_API_KEY);
        }
    });
});
