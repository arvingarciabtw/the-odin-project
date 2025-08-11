function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  if (secondOperand === 0) {
    return "You cant divide by 0, silly!";
  }

  let quotient = firstOperand / secondOperand;

  function countDecimals(value) {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
  }

  if (countDecimals(quotient) > 2) {
    quotient = quotient.toFixed(2);
  }

  return +quotient;
}

function operate(operator, firstOperand, secondOperand) {
  if (operator === "+") {
    return add(firstOperand, secondOperand);
  } else if (operator === "-") {
    return subtract(firstOperand, secondOperand);
  } else if (operator === "×") {
    return multiply(firstOperand, secondOperand);
  } else if (operator === "÷") {
    return divide(firstOperand, secondOperand);
  } else {
    console.error("Something went wrong!");
  }
}

const buttonsContainer = document.querySelector(".buttons-container");
const display = document.querySelector(".display");

let isAnOperator = null;
let firstOperand = null;
let secondOperand = null;
let operator = null;

buttonsContainer.addEventListener("click", (event) => {
  let target = event.target;

  // Replace multiple leading zeros
  display.textContent = display.textContent.replace(/^0+/, "");

  const operators = "+-×÷=";

  let temp = display.textContent;

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

  for (const operator of operators) {
    if (target.textContent.includes(operator)) {
      isAnOperator = true;
      break;
    } else {
      isAnOperator = false;
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
      firstOperand = null;
      secondOperand = null;
      operator = null;
      break;
    case "equal":
      break;
  }

  if (isAnOperator) {
    if (!isNaN(Number(temp))) {
      if (firstOperand === null) {
        firstOperand = Number(temp);
      } else if (secondOperand === null) {
        secondOperand = Number(temp);
      }
    }

    if (firstOperand !== null && secondOperand !== null && operator !== null) {
      const result = operate(operator, firstOperand, secondOperand);
      console.log(
        `RESULT OF ${firstOperand} ${operator} ${secondOperand} is: ${result}`,
      );
      display.textContent = result;
      firstOperand = result;
      secondOperand = null;
    }

    if (operator === "÷" && secondOperand === 0) {
      display.textContent = "ERROR";
    }

    operator = target.textContent;
    if (operator === "=") {
      firstOperand = null;
    }
  }
});
