import {groupAnagrams} from "./groupAnagrams.js";
import {expect, test} from "vitest";

test("groups anagrams",() =>{
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
});

test("handles an array with one word", () => {
    expect(groupAnagrams(["hello"])).toEqual([["hello"]])
});

test("handles an empty array", () => {
    expect(groupAnagrams([])).toEqual([]);
});

test("handles words without anagrams", () => {
    expect(groupAnagrams(["cat", "dog", "sun"])).toEqual([["cat"],["dog"],["sun"]]);
});

test("groups all words into one group when they are anagram", () => {
    expect(groupAnagrams(["eat", "tea", "ate"])).toEqual([["eat", "tea", "ate"]])
})