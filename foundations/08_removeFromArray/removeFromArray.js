const removeFromArray = function(inputArray, ...args) {
    const resultArray = [];

    inputArray.forEach((item) => {
        if (!args.includes(item)) {
            resultArray.push(item);
        }
    })

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
