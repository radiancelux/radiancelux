import { describe, expect, it } from "vitest";
import { normalizeResendFrom } from "./email.ts";

describe("normalizeResendFrom", () => {
    it("strips mistaken RESEND_FROM prefix", () => {
        expect(normalizeResendFrom("RESEND_FROM: Foo <a@b.com>")).toBe(
            "Foo <a@b.com>",
        );
    });
});
