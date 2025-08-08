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
    square.style.backgroundColor = "white";
    square.style.border = "1px solid #d0d0d0";
    square.style.flex = "1 0 auto";
    square.style.aspectRatio = "1 / 1";

    const squareSide = 760 / number;
    square.style.width = `${squareSide}px`;
    grid.appendChild(square);

    square.addEventListener("mouseenter", () => {
      if (blackModeButton.classList.contains("active")) {
        square.style.backgroundColor = "black";
        square.style.border = "1px solid black";
        square.style.opacity = "1";
      } else if (rgbModeButton.classList.contains("active")) {
        function getRandomColor() {
          var letters = "0123456789ABCDEF";
          var color = "#";
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }

        const randomColor = getRandomColor();

        square.style.backgroundColor = `${randomColor}`;
        square.style.border = `1px solid ${randomColor}`;
        square.style.opacity = "1";
      } else if (opacityModeButton.classList.contains("active")) {
        if (square.style.backgroundColor == "white") {
          square.style.backgroundColor = "black";
          square.style.border = "1px solid black";
          square.style.opacity = +square.style.opacity + 0.1;
        } else if (square.style.backgroundColor == "black") {
          square.style.opacity = +square.style.opacity + 0.1;
        }
      }
    });
  }
}

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

// Initialize a default 64x64 grid on first visit
makeSquares(64);
