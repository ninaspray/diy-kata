const numberToReversedDigits = number => {
    if(!Number.isInteger(number)) return "Please enter numbers";
    return number
        .toString()
        .split("")
        .reverse()
        .map(element => Number(element));
};
module.exports = numberToReversedDigits;

//if (!Number) {return "Numbers have not been entered"};