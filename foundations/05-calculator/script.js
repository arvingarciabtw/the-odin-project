// --- FUNCTIONS FOR EACH OPERATION ---
// add
// subtract
// multiply
// divide
//
// Each operation (function) should consist of a number, an operator, and another number. So, there should be three (or two?) variables.
//
// Create another function called operate. The arguments it should receive are the operator, and two numbers.
//
// Create the UI for each digit and operator, including =, and a display at the top where inputs will be shown
//
// Create the function(s) that populate the display when digit buttons are clicked. The content of the display (the number) should be stored in a variable
//
// Make it work. The first and second numbers should be stored, and operate() will be called when user clicks =
//
// GOTCHAS
// -- Take note of flow. Refer to TOP page.
// -- Round answers with long decimals to prevent overflow
// -- Clicking = before entering all numbers could cause bugs
// -- Clear should clear all existing data
// -- Handle edge cases (dividing by 0, etc)
// -- Take note of flow again. (e.g. 3 ++--+-+----+ 9 = 12; last operator is considered)
// -- When you have result, and clicked a digit, result should be cleared, and digit should appear on display for a NEW calculation.

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return "You cant divide by 0, silly!";
  }

  let quotient = firstNumber / secondNumber;

  function countDecimals(value) {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
  }

  if (countDecimals(quotient) > 2) {
    quotient = quotient.toFixed(2);
  }

  return +quotient;
}

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  } else {
    console.error("Something went wrong!");
  }
}

const buttonsContainer = document.querySelector(".buttons-container");
const display = document.querySelector(".display");

buttonsContainer.addEventListener("click", (event) => {
  let target = event.target;
  let isAnOperator = null;
  const operators = "+-×÷";

  for (const operator of operators) {
    if (display.textContent.includes(operator)) {
      isAnOperator = true;
      break;
    } else {
      isAnOperator = false;
    }
  }

  // Display number when clicked
  for (let i = 0; i <= 9; i++) {
    const current = i.toString();

    if (isAnOperator) {
      switch (target.className) {
        case current:
          display.textContent = current;
          break;
      }
    } else {
      switch (target.className) {
        case current:
          display.textContent += current;
          break;
      }
    }
  }

  // Display symbols, clearing, and equal
  switch (target.className) {
    case "add":
      display.textContent = "+";
      break;
    case "subtract":
      display.textContent = "-";
      break;
    case "multiply":
      display.textContent = "×";
      break;
    case "divide":
      display.textContent = "÷";
      break;
    case "clear":
      display.textContent = "";
      break;
    case "equal":
      display.textContent = "result";
      break;
  }
});
