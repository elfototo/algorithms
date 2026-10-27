import {expect, test} from "vitest";
import {mergeKSortedLists} from "./mergeKSortedLists.js";

test("merge sorted three arrays", () => {
    expect(mergeKSortedLists([1, 4, 7], [2, 5, 8], [3, 6, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("merge sorted three arrays but one array is empty", () => {
    expect(mergeKSortedLists([], [1, 2], [3, 4])).toEqual([1, 2, 3, 4])
});

test("merge sorted three arrays but there are dublicate values", () => {
    expect(mergeKSortedLists([1, 3, 5], [1, 2, 6], [4, 7, 8])).toEqual([1, 1, 2, 3, 4, 5, 6, 7, 8]);
});

