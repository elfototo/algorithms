import {test, it, expect} from "vitest";
import {SinglePass} from "./SinglePass.js";

test("handles array", () => {
    expect(SinglePass([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("handles empty array and returns zero", () => {
    expect(SinglePass([])).toBe(0);
});

test("handles array with falling prices and returns zero", () => {
    expect(SinglePass([5, 4, 3, 2, 1])).toBe(0);
});

test("handles array with one price and returns zero",() => {
    expect(SinglePass([9])).toBe(0);
})