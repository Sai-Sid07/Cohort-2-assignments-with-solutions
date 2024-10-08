/*
  Implement a class `Calculator` having below methods
    - (Done) initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - (Done) add: takes a number and adds it to the result
    - (Done) subtract: takes a number and subtracts it from the result
    - (Done) multiply: takes a number and multiply it to the result
    - (Done) divide: takes a number and divide it to the result
    - (Done) clear: makes the `result` variable to 0
    - (Done) getResult: returns the value of `result` variable
    - () calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *  5 +  (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        (Done)1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        (Done)2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

function parseExpression(expression) {
  const result = [];
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    // If it's a digit, add it to the current number
    if (!isNaN(parseInt(char))) {
      currentNumber += char;
    } else {
      // If it's a symbol, add the current number (if any) and the symbol
      if (currentNumber !== "") {
        result.push(parseInt(currentNumber));
        currentNumber = "";
      }
      result.push(char);
    }
  }

  // Add the last number (if any)
  if (currentNumber !== "") {
    result.push(parseInt(currentNumber));
  }

  return result;
}

class Calculator {
  constructor() {
    this.result = 0
  }

  add(number) {
    this.result += number
  }
  subtract(number) {
    this.result -= number
  }
  multiply(number) {
    this.result *= number
  }
  divide(number) {
    if(number === 0){
      throw new Error("Division by 0 is not possible")
    }
    this.result /= number
  }
  clear(){
    this.result = 0
  }
  getResult(){
    return this.result
  }
}

module.exports = Calculator;