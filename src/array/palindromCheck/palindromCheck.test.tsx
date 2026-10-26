import {expect, test} from "vitest";
import {isPalindrome} from "./palindromCheck.js";

test("the palindrome is even length", () => {
    expect(isPalindrome("leooel")).toBe(true);
});

test("the palindrome is odd length", () => {
    expect(isPalindrome("level")).toBe(true);
});

test("the palindrome is empty string", () => {
    expect(isPalindrome("")).toBe(true);
});

test("the palindrome is only one letter", () => {
    expect(isPalindrome("a")).toBe(true);
});

test("the string is not a palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
});