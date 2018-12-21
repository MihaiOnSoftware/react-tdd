// palindromes.js
module.exports = string => {
  const cleanString = string => {
    return string.toLowerCase().replace(/[^a-z]/g, "");
  };

  const isPalindromeRecursive = (string, stillPalindrome) => {
    if (!stillPalindrome || !string) return stillPalindrome;
    var equal = string.charAt(0) == string.charAt(string.length - 1);
    return isPalindromeRecursive(string.substr(1, string.length - 2), equal);
  };

  const isPalindrome = string => {
    return isPalindromeRecursive(string, true);
  };

  const findPalindromes = string => {
    var allPalindromes = [];
    var minEnd = 0;
    for (var start = 0; start < string.length; start++) {
      for (var end = string.length; end > start + 1 && end > minEnd; end--) {
        var current = string.substr(start, end);
        if (isPalindrome(current)) {
          minEnd = end;
          allPalindromes.push(current);
        }
      }
    }

    return allPalindromes;
  };

  var cleaned = cleanString(string);
  return findPalindromes(cleaned);
};
