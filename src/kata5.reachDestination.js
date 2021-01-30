const reachDestination = (distance, speed) => {
    const Time = Math.round((distance / speed * 2)) / 2.0;

    if (Time <= 0.5) { return "Nearly there" }
    if (Time >= 0.5 && Time <= 1.0) { return "Will be there in less than 1 hour" }
    else {return "I should be there in " + Time + " hours."}
};


module.exports = reachDestination;

