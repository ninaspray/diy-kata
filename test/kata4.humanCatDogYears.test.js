const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    xit("returns array of human, cat and dog years when passed human years", () => {
        expect(humanCatDogYears(10)).toBe([10, 56, 64]);
        expect(humanCatDogYears(20)).toBe([20, 96, 114]);
        expect(humanCatDogYears(33)).toBe([33, 148, 179]);
    });
});