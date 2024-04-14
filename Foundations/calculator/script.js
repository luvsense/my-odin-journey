const output = document.querySelector(".calculator__output");
const operatorButtons = document.querySelectorAll(".calculator__key--operator");
const numberButtons = document.querySelectorAll(".number-key");
const result = document.querySelector(".calculator__key--enter");
const clear = document.querySelector(".clear-btn");

let currentNumber = "";
let previousNumber = "";

let operator = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let number = this.value;
    currentNumber += number;
    output.textContent = currentNumber;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    operator = this.value;
    previousNumber = currentNumber;
    currentNumber = "";
  });
});

result.addEventListener("click", function () {
  let result;
  if (operator === "+") {
    result = add(Number(previousNumber), Number(currentNumber));
  } else if (operator === "-") {
    result = subtract(Number(previousNumber), Number(currentNumber));
  } else if (operator === "*") {
    result = multiply(Number(previousNumber), Number(currentNumber));
  } else if (operator == "/") {
    result = divide(Number(previousNumber), Number(currentNumber));
  }
  output.textContent = result;
});

function add(number1, number2) {
  const sum = number1 + number2;
  return sum;
}
function subtract(number1, number2) {
  const result = number1 - number2;
  return result;
}

function multiply(number1, number2) {
  const result = number1 * number2;
  return result;
}

function divide(number1, number2) {
  if (number2 === 0) {
    if (number1 > 0) {
      return "Infinity";
    } else if (number1 < 0) {
      return "-Infinity";
    } else {
      return "Error: Division by zero";
    }
  } else {
    return number1 / number2;
  }
}

clear.addEventListener("click", function () {
  output.textContent = "0";
  previousNumber = "";
  currentNumber = "";
});
