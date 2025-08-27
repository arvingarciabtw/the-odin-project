const playerGrid = document.querySelector(".grid-container");
const enemyGrid = document.querySelector(".grid-container-enemy");

function userInterface() {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("button");
    cell.classList.add("board-cell");
    cell.classList.add(i);
    playerGrid.appendChild(cell);
  }

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("button");
    cell.classList.add("board-cell");
    cell.classList.add(i);
    enemyGrid.appendChild(cell);
  }
}

export default userInterface;
