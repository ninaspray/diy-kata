const booleanToWord = boolean => {
    const returnNo = boolean === false;
    const returnYes = boolean === true;
    if (returnNo) return "No";
    if (returnYes) return "Yes";
};

module.exports = booleanToWord;
