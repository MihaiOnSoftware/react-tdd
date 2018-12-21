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
});
