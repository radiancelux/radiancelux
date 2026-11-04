import { describe, expect, it } from "vitest";
import {
    buildFeedbackEmail,
    validateClientHeader,
    validateFeedbackBody,
} from "./swarmdraft-feedback.ts";

const base = {
    area: "editor",
    type: "bug",
    description: "Something broke",
    appVersion: "0.1.0",
    os: "Windows 11",
    installId: "550e8400-e29b-41d4-a716-446655440000",
    nonce: "n-1",
    source: "app",
};

describe("validateClientHeader", () => {
    it("accepts desktop/<semver>", () => {
        expect(validateClientHeader("desktop/0.1.0")).toBe(true);
        expect(validateClientHeader("desktop/1.2.3-rc.1")).toBe(true);
    });

    it("rejects missing or wrong client", () => {
        expect(validateClientHeader(null)).toBe(false);
        expect(validateClientHeader("web/0.1.0")).toBe(false);
    });
});

describe("validateFeedbackBody", () => {
    it("returns field errors for invalid payload", () => {
        const { errors } = validateFeedbackBody({
            area: "nope",
            type: "bug",
            extra: true,
        });
        expect(errors?._unknown).toBeDefined();
    });

    it("requires description and valid enums", () => {
        const { errors } = validateFeedbackBody({
            ...base,
            description: "   ",
            type: "feature",
        });
        expect(errors?.description).toBeDefined();
        expect(errors?.type).toBeDefined();
    });

    it("drops excerpt when includeText is false", () => {
        const { payload } = validateFeedbackBody({
            ...base,
            includeText: false,
            excerpt: "secret manuscript",
        });
        expect(payload?.excerpt).toBeUndefined();
    });

    it("keeps excerpt when includeText is true", () => {
        const { payload } = validateFeedbackBody({
            ...base,
            includeText: true,
            excerpt: "selected line",
        });
        expect(payload?.excerpt).toBe("selected line");
    });
});

describe("buildFeedbackEmail", () => {
    it("builds subject and escapes html", () => {
        const { subject, html } = buildFeedbackEmail({
            ...base,
            description: "<script>alert(1)</script>",
            includeText: false,
            source: "app",
        });
        expect(subject).toBe("[swarmDraft feedback] bug/editor v0.1.0 (app)");
        expect(html).toContain("&lt;script&gt;");
        expect(html).not.toContain("<script>");
    });
});
