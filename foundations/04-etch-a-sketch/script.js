const main = document.querySelector("main");
const gridSize = document.querySelector(".grid-size");
const resetButton = document.querySelector(".btn-reset");
const grid = document.querySelector(".grid");

function askInput() {
  let userInput = +prompt("Input an integer from 1 - 100");

  while (!Number.isInteger(userInput) || userInput <= 0 || userInput > 100) {
    userInput = +prompt("Invalid input. Please enter an integer from 1 - 100.");
  }

  return userInput;
}

function makeSquares(number) {
  grid.innerHTML = "";
  for (let i = 1; i <= number * number; i++) {
    const square = document.createElement("div");
    square.classList.add(i);
    square.style.border = "1px solid #d0d0d0";
    square.style.flex = "1 0 auto";
    square.style.aspectRatio = "1 / 1";
    const squareSide = 760 / number;
    square.style.width = `${squareSide}px`;
    grid.appendChild(square);
  }
}

makeSquares(32);

resetButton.addEventListener("click", () => {
  makeSquares(askInput());
});
