const reachDestination = (distance, speed) => {
    const Time = (distance / speed).round;
    return "I should be there in" + Time + "hours.";
};

module.exports = reachDestination;
