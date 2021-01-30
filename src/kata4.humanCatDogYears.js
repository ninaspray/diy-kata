const humanCatDogYears = number => {
if(!Number.isInteger(number)) return "Please enter a number";

    const cat = findAge(number, "cat");
    const dog = findAge(number, "Dog");
    return [number, cat, dog];

    function findAge(number, animal) {
        if (number === 1) return 15;
        if (number === 2) return 15 + 9;
        if (number === 0) return 0;
        if (animal === "cat") return 24 + ((number - 2) * 4);
        if (animal === "Dog") return 24 + ((number - 2) * 5);
    };
};


module.exports = humanCatDogYears;