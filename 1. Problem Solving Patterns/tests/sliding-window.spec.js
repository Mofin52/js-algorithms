const maxSubArraySum = require("../1.3 sliding-window");

describe("sliding window", () => {
  it("returns 10", () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  });
  it("returns 17", () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  });
  it("returns 5", () => {
    expect(maxSubArraySum([4, 2, 1, 6], 1)).toBe(6);
  });
  it("returns 13", () => {
    expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  });
  it("returns null if passed array length is 0", () => {
    expect(maxSubArraySum([], 4)).toBe(null);
  });
});
