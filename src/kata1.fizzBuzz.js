const fizzBuzz = number => {
    const isDivisableBy3 = number % 3 === 0;
    const isDivisableBy5 = number % 5 === 0;
    if (isDivisableBy3 && isDivisableBy5) return "fizzBuzz";
    if (isDivisableBy3) return "fizz";
    if (isDivisableBy5) return "Buzz";
    return number;
};

module.exports = fizzBuzz;



/* (number%15===0)? console.log('fizzbuzz'): (number%3===0)?     
console.log('fizz'): (number%5===0)? console.log('buzz'): console.log(number)
} */
