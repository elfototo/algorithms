import { test, expect } from "vitest";
import { maxArea } from "./twoPointer.js";

test("handlers array", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test("handeles empty array", () => {
  expect(maxArea([])).toBe(0);
});

test("handles array with same numbers", () => {
  expect(maxArea([3, 3, 3, 3, 3])).toBe(12);
});

test("handles array fron one number", () => {
  expect(maxArea([2])).toBe(0);
});

test("handles decriasing heights", () => {
  expect(maxArea([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(20);
});

test("finds maximum area between inner elements", () => {
  expect(maxArea([1, 2, 9, 2, 1])).toBe(4)
})