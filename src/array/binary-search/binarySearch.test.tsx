import { binarySearch } from "./binarySearch.js";
import { describe, it, expect } from "vitest";

describe("Binary-Search", () => {
  it("handles sorted list", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  it("returns -1 if sorted list don't contain target", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 9)).toBe(-1);
  });
  it("handles empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("handles single element", () => {
    expect(binarySearch([5], 5)).toBe(0);
  });

  it("handles target at the beginning", () => {
    expect(binarySearch([1, 3, 5, 7], 1)).toBe(0);
  });

  it("handles target at the end", () => {
    expect(binarySearch([1, 3, 5, 7], 7)).toBe(3);
  });
});
