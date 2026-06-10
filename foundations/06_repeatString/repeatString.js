const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let resultString = "";
    for (let i = 0; i < num; i++) {
        resultString += string;
    }
    return resultString;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;


