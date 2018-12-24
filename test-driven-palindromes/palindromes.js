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

  const edges = string => {
    var pairs = [];
    for (var start = 0; start < string.length; start++) {
      for (var end = string.length; end > start + 1; end--) {
        pairs.push([start, end]);
      }
    }
    return pairs;
  };

  const start = edges => edges[0];
  const end = edges => edges[1];
  const last = array => array[array.length - 1];

  const isSubPalindrome = (palindromes, end, last, edges) => {
    return palindromes.length == 0 || end(last(palindromes)) < end(edges);
  };

  const stringify = (string, palindromes) => {
    return palindromes.map(palindrome => {
      return string.substr(palindrome[0], palindrome[1]);
    });
  };

  const findPalindromes = string => {
    const addPalindrome = (palindromes, edges) => {
      var substring = string.substr(start(edges), end(edges));
      if (isPalindrome(substring)) palindromes.push(edges);
      return palindromes;
    };

    const accumulatePalindromes = (palindromes, edges) => {
      if (isSubPalindrome(palindromes, end, last, edges)) {
        return addPalindrome(palindromes, edges);
      } else return palindromes;
    };

    var allPalindromes = edges(string).reduce(accumulatePalindromes, []);

    return stringify(string, allPalindromes);
  };

  var cleaned = cleanString(string);
  return findPalindromes(cleaned);
};
