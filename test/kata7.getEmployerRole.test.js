const { getEmployerRole } = require("../src");

const employees = [
  {
    name: "Nina",
    role: "Application Analyst"
  }, {
    name: "Alex",
    role: "Mechanical Engineer"
  }, {
    name: "Maggie",
    role: "House Cat"
  }
]

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Nina", employees)).toBe("Application Analyst");
    expect(getEmployerRole("Alex", employees)).toBe("Mechanical Engineer");
    expect(getEmployerRole("Maggie", employees)).toBe("House Cat");
  });
});
