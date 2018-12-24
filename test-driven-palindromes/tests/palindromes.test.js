// palindromes.test.js
const palindromes = require("../palindromes");

describe("palindromes()", () => {
  it("correctly identifies one-word palindromes", () => {
    expect(palindromes("madam")).toEqual(["madam"]);
    expect(palindromes("racecar")).toEqual(["racecar"]);
  });
  it("converts the given string to lowercase", () => {
    expect(palindromes("mAdAm")).toEqual(["madam"]);
  });
  it("removes all non-letter characters", () => {
    expect(palindromes("m a d a m!")).toEqual(["madam"]);
  });
  it("returns an empty array when given no palindromes", () => {
    expect(palindromes("tic tac toe")).toEqual([]);
  });
  it("detects multi-word palindromes", () => {
    expect(palindromes("A man, a plan, a canal, Panama")).toEqual([
      "amanaplanacanalpanama",
    ]);
  });
  it("detects a palindrome inside a string", () => {
    var input = "What number is never odd or even, asked the Sphinx?";
    var result = palindromes(input);
    expect(result).toEqual(["neveroddoreven"]);
  });
  it("detects multiple palindromes inside a string", () => {
    var input = "Madam! A cat tacked a pin.";
    var result = palindromes(input);
    expect(result).toEqual(["madam", "ama", "aca", "cattac"]);
  });
});
