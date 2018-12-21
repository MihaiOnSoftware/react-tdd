// palindromes.js
module.exports = string => {
  const cleanString = string => {
    return string.toLowerCase().replace(/[^a-z]/g, "");
  };
  return [cleanString(string)];
};
