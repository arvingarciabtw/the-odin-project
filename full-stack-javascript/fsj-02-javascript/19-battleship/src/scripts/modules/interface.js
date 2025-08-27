const playerGrid = document.querySelector(".grid-container");
const enemyGrid = document.querySelector(".grid-container-enemy");

function userInterface() {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("button");
    cell.classList.add("board-cell");
    cell.classList.add("player-cell");
    cell.dataset.index = i;
    playerGrid.appendChild(cell);
  }

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("button");
    cell.classList.add("board-cell");
    cell.classList.add("enemy-cell");
    cell.dataset.index = i;
    enemyGrid.appendChild(cell);
  }
}

function coordsToIndex(x, y) {
  return x * 10 + y;
}

function indexToCoords(index) {
  const x = Math.floor(index / 10);
  const y = index % 10;
  return [x, y];
}

function renderGameboard(gameboard, isPlayerBoard = true) {
  const cells = isPlayerBoard
    ? document.querySelectorAll(".player-cell")
    : document.querySelectorAll(".enemy-cell");

  const board = gameboard.renderBoard();

  cells.forEach((cell) => {
    cell.classList.remove("ship", "hit", "miss", "water");
  });

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const index = coordsToIndex(x, y);
      const cell = cells[index];
      const cellValue = board[x][y];

      switch (cellValue) {
        case "S":
          cell.classList.add("ship");
          break;
        case "H":
          cell.classList.add("hit");
          break;
        case "X":
          cell.classList.add("miss");
          break;
        case "O":
          cell.classList.add("water");
          break;
      }
    }
  }
}

function renderBothBoards(playerGameboard, enemyGameboard) {
  renderGameboard(playerGameboard, true);
  renderGameboard(enemyGameboard, false);
}

export default userInterface;
export { renderGameboard, renderBothBoards, coordsToIndex, indexToCoords };
