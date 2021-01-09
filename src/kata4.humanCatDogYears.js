const humanCatDogYears = number => {
    function getages(age, animalage) {
        const cat = age(number, "cat");
        const dog = age(number, "dog");
        const human = age(number);
        if (animalage === cat) return 24 + ((age - 2) * 4);
        if (animalage === dog) return 24 + ((age - 2) * 5);
        return [human, "cat", "dog"];

    }
};


module.exports = humanCatDogYears;