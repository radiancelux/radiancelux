import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { onRequestPost } from "./contact.ts";

const env = {
    RESEND_API_KEY: "re_contact_key",
    CONTACT_TO: "contact@example.com",
    RESEND_FROM: "Radiance Lux <contact@example.com>",
};

function makeRequest(body: Record<string, unknown>): Request {
    return new Request("https://radiancelux.tech/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "CF-Connecting-IP": "198.51.100.4",
        },
        body: JSON.stringify(body),
    });
}

function mockCache(count = 0) {
    const cache = {
        match: vi.fn(async () =>
            count ? new Response(String(count)) : undefined,
        ),
        put: vi.fn(async () => {}),
    };
    vi.stubGlobal("caches", { default: cache });
    return cache;
}

describe("contact onRequestPost regression", () => {
    beforeEach(() => {
        mockCache(0);
        vi.stubGlobal(
            "fetch",
            vi.fn(async () => new Response("{}", { status: 200 })),
        );
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it("returns 429 when rate limited", async () => {
        mockCache(5);
        const res = await onRequestPost({
            request: makeRequest({
                name: "A",
                email: "a@b.com",
                message: "Hi",
            }),
            env,
        });
        expect(res.status).toBe(429);
        expect(await res.json()).toEqual({
            message: "Too many requests. Try again in a minute.",
        });
    });

    it("honeypot succeeds without sending", async () => {
        const fetchMock = vi.mocked(fetch);
        const res = await onRequestPost({
            request: makeRequest({
                name: "Bot",
                email: "x@y.com",
                message: "spam",
                website: "http://x",
            }),
            env,
        });
        expect(res.status).toBe(200);
        expect(fetchMock).not.toHaveBeenCalled();
    });

    it("sends mail through Resend on valid post", async () => {
        const fetchMock = vi.mocked(fetch);
        const res = await onRequestPost({
            request: makeRequest({
                name: "Brett",
                email: "b@example.com",
                message: "Hello there",
            }),
            env,
        });
        expect(res.status).toBe(200);
        expect(fetchMock).toHaveBeenCalledOnce();
        const init = fetchMock.mock.calls[0][1] as RequestInit;
        const payload = JSON.parse(init.body as string);
        expect(payload.to).toEqual(["contact@example.com"]);
        expect(payload.reply_to).toBe("b@example.com");
    });

    it("uses contact rate-limit prefix in cache key", async () => {
        const cache = mockCache(0);
        await onRequestPost({
            request: makeRequest({
                name: "Brett",
                email: "b@example.com",
                message: "Hello",
            }),
            env,
        });
        const key = cache.put.mock.calls[0][0] as Request;
        expect(key.url).toContain("/contact/");
    });
});
