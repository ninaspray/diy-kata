const joinNames = namesObj => {
    let result = ""

    for (let i = 0; i < namesObj.length; i++) {
        const name = namesObj[i].name
        result += name
        if (i < namesObj.length - 2) result += ", "
        if (i === namesObj.length - 2) result += " & "
    };

    return result
};

module.exports = joinNames;