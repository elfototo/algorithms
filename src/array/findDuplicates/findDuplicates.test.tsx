import {findDuplicates} from "./findDuplicates.js";
import {expect, test} from "vitest";

test("returns all duplicates in the array they are first detected", ()=> {
    expect(findDuplicates([1, 2, 3, 2, 4, 1, 5])).toEqual([2,1])
});

test("returns empty array if the array doesn't contains duplicates", () => {
    expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([])
});

test("returns empty array if the order doesn't contains any numbers", () => {
    expect(findDuplicates([])).toEqual([]);
});

test("returns array with only one number if the order contains the same numbers", () => {
    expect(findDuplicates([5, 5, 5, 5])).toEqual([5]);
})