const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(123)).toStrictEqual([3, 2, 1]);
  });
  it("returns an error when NAN is passed", () => {
    expect(numberToReversedDigits("Maggie Cat")).toBe("Please enter numbers");
    expect(numberToReversedDigits("7894")).toBe("Please enter numbers");
  });
});
