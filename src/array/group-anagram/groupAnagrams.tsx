Input: ["eat", "tea", "tan", "ate", "nat", "bat"];

Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

export function groupAnagrams(array: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let word of array) {
    let anagram = word.split("").sort().join("");

    if (map.has(anagram)) {
      map.get(anagram)!.push(word);
    } else {
      map.set(anagram, [word]);
    }
  }

  const result = [...map.values()]

  return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
