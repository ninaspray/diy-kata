const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(70, 70)).toBe("I should be there in 1 hours.");
    expect(reachDestination(20, 30)).toBe("Will be there in less than 1 hour");
    expect(reachDestination(20, 50)).toBe("Will be there in less than 1 hour");
  });
});
