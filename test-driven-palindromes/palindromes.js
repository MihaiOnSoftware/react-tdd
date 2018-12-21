// palindromes.js
module.exports = string => {
  return [string.toLowerCase().replace(/[^a-z]/g, "")];
};
