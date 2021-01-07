const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("Returns Yes when passed true, and No when passed false", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
    expect(booleanToWord(true)).toBe("Nina");
  });
});