const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    xit("returns array of human, cat and dog years when passed human years", () => {
        expect(10).toBe([10, 56, 64]);
        expect(20).toBe([20, 96, 114]);
        expect(33).toBe([33, 148, 179]);
    });
});