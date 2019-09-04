// palindromes.js
const Palindrome = require("./palindrome.js");

module.exports = string => {
  const stripNonAlphabetical = string => {
    return string.replace(/[^a-z]/g, "");
  };

  const cleanString = string => {
    return stripNonAlphabetical(string.toLowerCase());
  };

  const isStringWithEqualEnds = string => {
    return string.charAt(0) == string.charAt(string.length - 1);
  };

  const dropEnds = string => {
    var newStart = 1;
    var length = string.length - newStart - 1;
    return string.substr(newStart, length);
  };

  const isPalindrome = string => {
    function innerPalindromeCheck(string, stillPalindrome) {
      var recursionDone = !string;
      return (
        stillPalindrome &&
        (recursionDone ||
          innerPalindromeCheck(dropEnds(string), isStringWithEqualEnds(string)))
      );
    }
    return innerPalindromeCheck(string, true);
  };

  const lastElement = array => array[array.length - 1];
  const isEmpty = array => array.length == 0;

  const independentPalindrome = (palindromes, palindrome) => {
    return (
      isEmpty(palindromes) ||
      Palindrome.endPosition(lastElement(palindromes)) <
        Palindrome.endPosition(palindrome)
    );
  };

  const validPalindrome = (palindromes, palindrome) => {
    return (
      independentPalindrome(palindromes, palindrome) &&
      isPalindrome(Palindrome.substring(palindrome))
    );
  };

  const accumulateValidPalindromes = (palindromes, palindrome) => {
    if (validPalindrome(palindromes, palindrome)) palindromes.push(palindrome);
    return palindromes;
  };

  const possiblePalindromes = string => {
    var palindromes = [];
    for (var start = 0; start < string.length; start++) {
      for (var end = string.length; end > start + 1; end--) {
        const substring = string.substr(start, end - start);
        palindromes.push(Palindrome.create(end, substring));
      }
    }
    return palindromes;
  };

  const findPalindromes = string => {
    return possiblePalindromes(string)
      .reduce(accumulateValidPalindromes, [])
      .map(Palindrome.substring);
  };

  var cleaned = cleanString(string);
  return findPalindromes(cleaned);
};
