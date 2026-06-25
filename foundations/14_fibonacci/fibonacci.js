const fibonacci = function(userInput) {
    let counter;

    if (typeof userInput !== "number") {
        counter = parseInt(userInput);
    } else {
        counter = userInput;
    }

    if (counter < 0) return "OOPS";
    if (counter === 0) return 0;

    const fib = [0, 1];
    for (let i = 2; i <= counter; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[counter];
};

// Do not edit below this line
module.exports = fibonacci;
