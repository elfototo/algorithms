// Input: "abcabcbb";
// Output: 3;
// // "abc"

// Input: "bbbbb";
// Output: 1;
// // "b"

// Input: "pwwkew";
// Output: 3;
// // "wke"

// Input: "";
// Output: 0;

// Дана строка s. Нужно найти длину самой длинной подстроки, в которой все символы уникальны (не повторяются).

function longestSubstring(str: string) {
  let set = new Set<string | undefined>();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while(set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log("longestSubstring", longestSubstring("abcabcbb"));
console.log("longestSubstring", longestSubstring("bbbbb"));
console.log("longestSubstring", longestSubstring("pwwkew"));

