const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(12345).toBe([5, 4, 3, 2, 1]);
    expect(123).toBe([3, 2, 1]);
  });
});
