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

  var cleaned = cleanString(string);
  if (isPalindrome(cleaned, true)) return [cleaned];
  return [];
};
