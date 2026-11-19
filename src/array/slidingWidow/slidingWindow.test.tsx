import {longestSubstring} from "./slidingWindow.js";
import { describe, it, expect } from "vitest";

describe("longestSubstring", () => {
    it("handles string", () => {
        expect(longestSubstring("abcabcbb")).toBe(3);
    });

    it("handles string with same chars", () => {
        expect(longestSubstring("bbbbb")).toBe(1);
    });

    it("handles empty string", () => {
        expect(longestSubstring("")).toBe(0)
    });

    it("handles string with single char", () => {
        expect(longestSubstring("a")).toBe(1);
    })
})