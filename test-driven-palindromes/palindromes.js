// palindromes.js
module.exports = string => {
  const cleanString = string => {
    return string.toLowerCase().replace(/[^a-z]/g, "");
  };

  const isPalindrome = string => {
    var stillPalindrome = true;
    for (
      var left = 0, right = string.length - 1;
      stillPalindrome && left < right;
      left++, right--
    ) {
      var equal = string.charAt(left) == string.charAt(right);
      stillPalindrome = equal;
    }
    return stillPalindrome;
  };

  var cleaned = cleanString(string);
  if (isPalindrome(cleaned)) return [cleaned];
  return [];
};
