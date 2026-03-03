/*
  --- THEME TOGGLE ---
*/
const root = document.querySelector("html");
const toggler = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".theme-toggle-icon");

if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
} else {
  root.classList.remove("dark");
}

toggler.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

/*
  --- MOBILE MENU ---
*/
const menu = document.querySelector(".menu-button");
const closeModal = document.querySelector(".close-modal-button");
const modal = document.querySelector(".modal");

menu.addEventListener("click", () => {
  if (modal.style.display === "grid") {
    modal.style.display = "none";
  } else {
    modal.style.display = "grid";
  }
});

closeModal.addEventListener("click", () => {
  if (modal.style.display === "grid") {
    modal.style.display = "none";
  } else {
    modal.style.display = "grid";
  }
});

/*
  --- CALCULATOR ---
*/
const inputs = document.querySelector(".inputs");

let firstOperand;
let operator;
let secondOperand;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(firstOperand, secondOperand, operator) {
  if (
    firstOperand === undefined ||
    secondOperand === undefined ||
    operator === undefined
  ) {
    console.error("Error. Performed an invalid operation.");
  }

  switch (operator) {
    case "+":
      const sum = add(+firstOperand, +secondOperand);
      return toFixedIfNecessary(sum);
    case "-":
      const difference = subtract(+firstOperand, +secondOperand);
      return toFixedIfNecessary(difference);
    case "×":
      const product = multiply(+firstOperand, +secondOperand);
      return toFixedIfNecessary(product);
    case "÷":
      const quotient = divide(+firstOperand, +secondOperand);
      return toFixedIfNecessary(quotient);
  }
}

function toFixedIfNecessary(value, dp = 2) {
  return +parseFloat(value).toFixed(dp);
}

function check(input, isOperator = false) {
  // Second operand case
  if (firstOperand !== undefined && operator !== undefined) {
    if (!isOperator) {
      secondOperand =
        secondOperand === undefined
          ? input === 0
            ? undefined
            : String(input)
          : secondOperand + input;

      output.textContent = `${firstOperand} ${operator} ${secondOperand === undefined ? "" : secondOperand}`;
    }

    if (input === "-") {
      secondOperand =
        secondOperand === undefined ? String(input) : secondOperand;

      output.textContent = `${firstOperand} ${operator} ${secondOperand === undefined ? "-" : secondOperand}`;
    }
  }

  // Operator case
  if (firstOperand !== undefined && isOperator && firstOperand !== "-") {
    if (
      secondOperand !== undefined &&
      operator !== undefined &&
      secondOperand !== "-"
    ) {
      firstOperand = String(operate(firstOperand, secondOperand, operator));
      secondOperand = undefined;
      operator = input;

      output.textContent = `${firstOperand} ${operator}`;
    } else {
      if (secondOperand === undefined) {
        operator = input;
      }
      operator =
        operator === undefined ? input : input !== "-" ? operator : operator;

      output.textContent = `${firstOperand} ${operator} ${secondOperand === "-" ? "-" : ""}`;
    }
  }

  // First operand case
  if (operator === undefined && secondOperand === undefined) {
    if (!isOperator) {
      firstOperand =
        firstOperand === undefined
          ? input === 0
            ? undefined
            : String(input)
          : firstOperand + input;

      output.textContent = firstOperand;
    }

    if (input === "-" && firstOperand === undefined) {
      firstOperand = firstOperand === undefined ? String(input) : firstOperand;

      output.textContent = firstOperand;
    }
  }
}

inputs.addEventListener("click", (evt) => {
  const btn = evt.target.closest("button");

  if (!btn) return;

  switch (btn.id) {
    case "zero":
      check(0);
      break;
    case "one":
      check(1);
      break;
    case "two":
      check(2);
      break;
    case "three":
      check(3);
      break;
    case "four":
      check(4);
      break;
    case "five":
      check(5);
      break;
    case "six":
      check(6);
      break;
    case "seven":
      check(7);
      break;
    case "eight":
      check(8);
      break;
    case "nine":
      check(9);
      break;
    case "add":
      check("+", true);
      break;
    case "subtract":
      check("-", true);
      break;
    case "multiply":
      check("×", true);
      break;
    case "divide":
      check("÷", true);
      break;
    case "equal":
      const result = operate(firstOperand, secondOperand, operator);

      if (!isNaN(result)) {
        firstOperand = result;
        secondOperand = undefined;
        operator = undefined;
        output.textContent = firstOperand;
      }

      break;
    case "clear":
      firstOperand = undefined;
      secondOperand = undefined;
      operator = undefined;

      output.textContent = "";
      break;
  }
});
