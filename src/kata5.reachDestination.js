const reachDestination = (distance, speed) => {
    const Time = Math.round((distance / speed * 2)) / 2.0;

    if (Time < 1) { return "Will be there in less than 1 hour" };
    return "I should be there in " + Time + " hours.";
};


module.exports = reachDestination;
