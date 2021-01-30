const humanCatDogYears = number => {
    const cat = findAge(number, "cat");
    const dog = findAge(number, "Dog");
    return [number, cat, dog];

    function findAge(human, animal) {
        human = number;
        if (animal === "cat") return 24 + ((number - 2) * 4);
        if (animal === "Dog") return 24 + ((number - 2) * 5);
        if (animal === 1) return 15;
    };
};


module.exports = humanCatDogYears;