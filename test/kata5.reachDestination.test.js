const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10).toEqual("I should be there in"4.5"hours."));
    expect(reachDestination(70, 70).toEqual("I should be there in"1.0"hours."));
    expect(reachDestination(20, 60).toEqual("I should be there in"0.5"hours."));
  });
});
