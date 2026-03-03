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
  --- GRID SIZE MODAL ---
*/
const trigger = document.querySelector("#set-grid-size-btn");
const gridSizeModal = document.querySelector(".set-grid-size-modal");
const closeGridSizeModal = document.querySelector("#close-grid-size-modal");

trigger.addEventListener("click", () => {
  if (
    gridSizeModal.style.display === "" ||
    gridSizeModal.style.display === "none"
  ) {
    gridSizeModal.style.display = "block";
  }
});

closeGridSizeModal.addEventListener("click", () => {
  if (gridSizeModal.style.display === "block") {
    gridSizeModal.style.display = "none";
  }
});

/*
  --- ETCH-A-SKETCH ---
*/
const grid = document.querySelector(".grid");

let gridDimensions = 16;

grid.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridDimensions}, 1fr)`;

for (let i = 0; i < gridDimensions * gridDimensions; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.border = "1px solid var(--color-fg)";

  cell.addEventListener("mouseover", () => {
    console.log("mouseovered a cell");
    cell.style.backgroundColor = "var(--color-fg)";
  });

  grid.appendChild(cell);
}

const form = document.querySelector("#grid-size-form");
const input = document.querySelector("#grid-size-input");
const gridSize = document.querySelector(".grid-size span");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("form submitted");
  console.log(input.value);

  grid.innerHTML = "";

  gridDimensions = input.value;

  for (let i = 0; i < gridDimensions * gridDimensions; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.border = "1px solid var(--color-fg)";

    cell.addEventListener("mouseover", () => {
      console.log("mouseovered a cell");
      cell.style.backgroundColor = "var(--color-fg)";
    });

    grid.appendChild(cell);
  }

  grid.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${input.value}, 1fr)`;

  gridSize.textContent = `${input.value}x${input.value}`;

  input.value = "";

  gridSizeModal.style.display = "none";
});

const clearGridBtn = document.querySelector("#clear-grid-btn");

clearGridBtn.addEventListener("click", () => {
  grid.innerHTML = "";

  for (let i = 0; i < gridDimensions * gridDimensions; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.border = "1px solid var(--color-fg)";

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "var(--color-fg)";
    });

    grid.appendChild(cell);
  }
});
