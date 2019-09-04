// isPalindrome.js
module.exports = string => {
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
  return isPalindrome(string);
};
