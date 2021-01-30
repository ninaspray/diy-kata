const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns array of human, cat and dog years when passed human years", () => {
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
        expect(humanCatDogYears(20)).toStrictEqual([20, 96, 114]);
        expect(humanCatDogYears(33)).toStrictEqual([33, 148, 179]);
        expect(humanCatDogYears(1)).toStrictEqual([1, 15, 15]);
    });
});