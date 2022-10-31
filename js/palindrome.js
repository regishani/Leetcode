// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

function isPalindrome(x) {
    // your code here
    const str = x.toString().toLowerCase()
    const middle = Math.floor(str.length / 2);
    for (let i = 0; i < middle; ++i) {
      const oppositeIndex = str.length - 1 - i;
      if (str[i] === str[oppositeIndex]) {
        return true;
      }
    }
    if (str.length === 1 || str===""){
      return true
    }
    return false;
}