const booleanToWord = boolean => {
    const returnNo = boolean === false;
    const returnYes = boolean === true;
    if (returnNo) { return ("No"); }
  if (returnYes) { return ("Yes"); }
  else { return ("Sorry not a Boolean");}
};
module.exports = booleanToWord;
