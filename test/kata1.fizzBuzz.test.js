const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(27)).toBe("fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("fizzBuzz");
    expect(fizzBuzz(45)).toBe("fizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(17)).toBe(17);
  });
});