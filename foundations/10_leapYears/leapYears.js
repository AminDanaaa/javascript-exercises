const leapYears = function(inputYear) {
    const isYearDivisibleByFour = inputYear % 4 === 0;
    const isCentury = inputYear % 100 === 0;
    const isYearDivisibleByFourHundred = inputYear % 400 === 0;

    if (isYearDivisibleByFour &&
        (!isCentury || isYearDivisibleByFourHundred)
    ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
