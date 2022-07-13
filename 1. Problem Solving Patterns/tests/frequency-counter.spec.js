const validAnagram = require("../1.1 frequency-counter");

describe("frequency counter", () => {
  it("returns true", () => {
    expect(validAnagram("", "")).toBe(true);
    expect(validAnagram("anagram", "nagaram")).toBe(true);
    expect(validAnagram("qwerty", "qeywrt")).toBe(true);
    expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
  });
  it("returns false", () => {
    expect(validAnagram("aaz", "zza")).toBe(false);
    expect(validAnagram("rat", "car")).toBe(false);
    expect(validAnagram("awesome", "awesom")).toBe(false);
  });
});
