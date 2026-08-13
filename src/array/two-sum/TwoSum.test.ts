import { expect, test } from "vitest";
import twoSum from "./TwoSum.js";

test("finds a pair that adds up to target", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0]);
});

test("find a pair of non-edjacment numbers", () => {
  expect(twoSum([2, 13, 4, 5], 9)).toEqual([3, 2]);
});

test("returns an empty array if there is not pair", () => {
    expect(twoSum([2, 4, 6, 1], 9)).toEqual([]);
})

test("works with negative numbers", () => {
    expect(twoSum([-1, -2, 8, 3], -3)).toEqual([1, 0]);
})

test("works with two numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([1, 0]);
})