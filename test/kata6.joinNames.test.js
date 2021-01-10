const { joinNames } = require("../src");

const simpsons = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
const family = [
  { name: "Nina" },
  { name: "Bailey" },
  { name: "Isobel" },
  { name: "Carol" },
  { name: "Glen" }
];

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(simpsons)).toStrictEqual("Bart, Lisa & Maggie");
    expect(joinNames(family)).toStrictEqual("Nina, Bailey, Isobel, Carol & Glen");
  });
});
