// palindromes.js
module.exports = string => {
  const stripNonAlphabetical = string => {
    return string.replace(/[^a-z]/g, "");
  };

  const cleanString = string => {
    return stripNonAlphabetical(string.toLowerCase());
  };

  const isPalindromeRecursive = (string, stillPalindrome) => {
    if (!stillPalindrome || !string) return stillPalindrome;
    var equal = string.charAt(0) == string.charAt(string.length - 1);
    return isPalindromeRecursive(string.substr(1, string.length - 2), equal);
  };

  const isPalindrome = string => {
    return isPalindromeRecursive(string, true);
  };

  const possiblePalindromes = string => {
    var palindromes = [];
    for (var start = 0; start < string.length; start++) {
      for (var end = string.length; end > start + 1; end--) {
        palindromes.push([end, string.substr(start, end)]);
      }
    }
    return palindromes;
  };

  const end = palindrome => palindrome[0];
  const substring = palindrome => palindrome[1];
  const last = array => array[array.length - 1];

  const independentPalindrome = (palindromes, palindrome) => {
    return palindromes.length == 0 || end(last(palindromes)) < end(palindrome);
  };

  const validPalindrome = (palindromes, palindrome) => {
    return (
      independentPalindrome(palindromes, palindrome) &&
      isPalindrome(substring(palindrome))
    );
  };

  const findPalindromes = string => {
    const accumulatePalindromes = (palindromes, palindrome) => {
      if (validPalindrome(palindromes, palindrome))
        palindromes.push(palindrome);
      return palindromes;
    };

    return possiblePalindromes(string)
      .reduce(accumulatePalindromes, [])
      .map(substring);
  };

  var cleaned = cleanString(string);
  return findPalindromes(cleaned);
};
