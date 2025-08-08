const main = document.querySelector("main");
const grid = document.querySelector(".grid");
const gridSize = document.querySelector(".grid-size");
const resetButton = document.querySelector(".btn-reset");
const modesContainer = document.querySelector(".modes-container");
const blackModeButton = document.querySelector(".btn-black-mode");
const rgbModeButton = document.querySelector(".btn-rgb-mode");
const opacityModeButton = document.querySelector(".btn-opacity-mode");

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
    square.classList.add("square");
    square.classList.add(i);
    square.style.border = "1px solid #d0d0d0";
    square.style.flex = "1 0 auto";
    square.style.aspectRatio = "1 / 1";

    const squareSide = 760 / number;
    square.style.width = `${squareSide}px`;
    grid.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
      square.style.border = "1px solid black";
    });
  }
}

makeSquares(32);

resetButton.addEventListener("click", () => {
  makeSquares(askInput());
});

modesContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.className) {
    case "btn-black-mode":
      target.classList.toggle("active");
      rgbModeButton.classList.remove("active");
      opacityModeButton.classList.remove("active");
      break;
    case "btn-rgb-mode":
      target.classList.toggle("active");
      blackModeButton.classList.remove("active");
      opacityModeButton.classList.remove("active");
      break;
    case "btn-opacity-mode":
      target.classList.toggle("active");
      blackModeButton.classList.remove("active");
      rgbModeButton.classList.remove("active");
      break;
  }
});
