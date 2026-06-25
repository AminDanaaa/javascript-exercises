const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce((sum, currentNumber) => {
    return sum + currentNumber;
  }, 0);
};

const multiply = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce((total, currentNumber) => {
    return total * currentNumber;
  }, 1);
};

const power = function(firstNumber, secondNumber) {
	return firstNumber ** secondNumber;
};

const factorial = function(number) {
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
