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

  compute(operators, values){
    const operator = operators.pop()
    const b = values.pop()
    const a = values.pop()
    switch (operator) {
      case "+":
        values.push(a + b)
        break;
      case "-":
        values.push(a - b)
        break;
      case "*":
        values.push(a * b)
        break;
      case "/":
        if(parseInt(element) === 0){
          throw new Error("Division by 0 is not possible")
        } 
        values.push(a / b)
        break;
      default:
        throw new Error("Invalid Operation")
        break;
    }
  }

  calculate(expression){
      // Remove all white spaces from the expression
      const sanitizedExpression = parseExpression(expression);
      
      // Check for invalid characters
      if (/[^0-9+\-*/().]/.test(sanitizedExpression)) {
          throw new Error("Invalid characters in expression.");
      }
  
      // Evaluate the expression
      try {
          this.result = eval(sanitizedExpression);
          if(result == Infinity){
            throw new Error("Cannot divide by 0")
          }
      } catch (error) {
          throw new Error("Error in evaluating the expression.");
      }
  
      return this.result;
  }

    // const symbols = ["+", "-", "*", "/", "(", ")"]
    // const values = []
    // const operators = []
    // const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
    // expression = parseExpression(expression);
    // console.log(expression)
    // expression = expression.filter(item => item != ' ')
    // let isInvalidExpression  = expression.find((item) => {
    //   if(!symbols.includes(item)){
    //   return isNaN(parseInt(item))
    //   }
    // })
    // if(isInvalidExpression){
    //   throw new Error("Invalid characters passed")
    // }

    // for (let index = 0; index < expression.length; index++) {
    //   const element = expression[index];
    //   if(typeof(element) == "number"){
    //     values.push(parseFloat(element))
    //   }else if(element in precedence){
    //     while(operators.length > 0 && precedence[operators[operators.length - 1]] >= precedence[element]){
    //       this.compute(operators, values)
    //     }
    //     operators.push(element)
    //   }else if(element == "("){
    //     operators.push(element)
    //   }else if(element == ")"){
    //     while(operators[operators.length - 1] != "("){
    //       this.compute(operators, values)
    //     }
    //     operators.pop()
    //   }

    //   while(operators.length > 0){
    //     this.compute(operators, values)
    //   }    

    //   this.result = values.pop()
    // }
  }

module.exports = Calculator;