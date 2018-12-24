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

  const substrings = string => {
    var pairs = [];
    for (var start = 0; start < string.length; start++) {
      for (var end = string.length; end > start + 1; end--) {
        pairs.push([start, end]);
      }
    }
    return pairs;
  };

  const findPalindromes = string => {
    var allSubStrings = substrings(string);

    const reducer = (accumulator, current) => {
      var substring = string.substr(current[0], current[1]);
      if (
        (accumulator.length == 0 ||
          accumulator[accumulator.length - 1][1] < current[1]) &&
        isPalindrome(substring)
      ) {
        accumulator.push(current);
      }
      return accumulator;
    };

    var allPalindromes = allSubStrings.reduce(reducer, []);

    var allPalindromeStrings = allPalindromes.map(palindrome => {
      return string.substr(palindrome[0], palindrome[1]);
    });

    return allPalindromeStrings;
  };

  var cleaned = cleanString(string);
  return findPalindromes(cleaned);
};
