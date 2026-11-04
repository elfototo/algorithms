export function isPalindrome(string: string): boolean {
  if (string.length === 1 || string.length === 0) return true;
  
    for (let i = 0; i < Math.floor(string.length/2); i++) {
       if  (string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

  return true;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("a"));
console.log(isPalindrome(""));
