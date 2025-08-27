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

function randomizeShips(gameboard, ships) {
  gameboard.ships = [];
  gameboard.hitAttacks = [];
  gameboard.missedAttacks = [];

  const shipLengths = ships.map((ship) => ship.length);
  const orientations = ["alongX", "alongY"];

  shipLengths.forEach((length) => {
    let placed = false;
    let attempts = 0;
    const maxAttempts = 100;

    while (!placed && attempts < maxAttempts) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const orientation = orientations[Math.floor(Math.random() * 2)];

      const ship = ships.find((s) => s.length === length && !s.placed);

      if (ship) {
        const coordinates = gameboard.placeShip(ship, x, y, orientation);

        if (coordinates.length > 0) {
          ship.placed = true;
          placed = true;
        }
      }

      attempts++;
    }

    if (!placed) {
      console.warn(
        `Could not place ship of length ${length} after ${maxAttempts} attempts`,
      );
    }
  });

  ships.forEach((ship) => {
    ship.placed = false;
  });
}

function setupRandomizeButton(
  playerGameboard,
  enemyGameboard,
  playerShips,
  enemyShips,
  renderCallback,
) {
  const randomizeBtn = document.querySelector(
    ".btns-container button:first-child",
  );

  if (randomizeBtn) {
    randomizeBtn.addEventListener("click", () => {
      [...playerShips, ...enemyShips].forEach((ship) => {
        ship.hitCount = 0;
        ship.isSunken = false;
        ship.placed = false;
      });

      randomizeShips(playerGameboard, playerShips);
      randomizeShips(enemyGameboard, enemyShips);

      renderCallback();

      console.log("Ships randomized!");
      console.log("Player's board: ");
      console.log(playerGameboard.renderBoard());
      console.log("Enemy's board: ");
      console.log(enemyGameboard.renderBoard());
    });
  }
}

export default userInterface;
export {
  renderGameboard,
  renderBothBoards,
  coordsToIndex,
  indexToCoords,
  randomizeShips,
  setupRandomizeButton,
};
