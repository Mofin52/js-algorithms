const countUniqueValues = require("../1.2 multiple-pointers");

describe("multiple pointer", () => {
  it("returns 0 on empty array", () => {
    expect(countUniqueValues([])).toBe(0);
  });
  it("returns 0 on non empty array", () => {
    expect(countUniqueValues([1, 1, 1])).toBe(0);
  });
  it("returns 2", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
  });
  it("returns 7", () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });
  it("returns 4", () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});
