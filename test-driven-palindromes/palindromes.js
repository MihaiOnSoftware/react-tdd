// palindromes.js
module.exports = string => {
  const stripNonAlphabetical = string => {
    return string.replace(/[^a-z]/g, "");
  };

  const cleanString = string => {
    return stripNonAlphabetical(string.toLowerCase());
  };

  const equalEnds = string => {
    return string.charAt(0) == string.charAt(string.length - 1);
  };

  const newEnds = string => {
    var newStart = 1;
    var length = string.length - newStart - 1;
    return string.substr(newStart, length);
  };

  const isPalindromeRecursive = (string, stillPalindrome) => {
    return (
      stillPalindrome &&
      (!string || isPalindromeRecursive(newEnds(string), equalEnds(string)))
    );
  };

  const isPalindrome = string => {
    return isPalindromeRecursive(string, true);
  };

  const possiblePalindromes = string => {
    var palindromes = [];
    for (var start = 0; start < string.length; start++) {
      for (var end = string.length; end > start + 1; end--) {
        palindromes.push([end, string.substr(start, end - start)]);
      }
    }
    return palindromes;
  };

  const end = palindrome => palindrome[0];
  const substring = palindrome => palindrome[1];
  const last = array => array[array.length - 1];
  const isEmpty = array => array.length == 0;

  const independentPalindrome = (palindromes, palindrome) => {
    return isEmpty(palindromes) || end(last(palindromes)) < end(palindrome);
  };

  const validPalindrome = (palindromes, palindrome) => {
    return (
      independentPalindrome(palindromes, palindrome) &&
      isPalindrome(substring(palindrome))
    );
  };

  const accumulatePalindromes = (palindromes, palindrome) => {
    if (validPalindrome(palindromes, palindrome)) palindromes.push(palindrome);
    return palindromes;
  };

  const findPalindromes = string => {
    return possiblePalindromes(string)
      .reduce(accumulatePalindromes, [])
      .map(substring);
  };

  var cleaned = cleanString(string);
  return findPalindromes(cleaned);
};
