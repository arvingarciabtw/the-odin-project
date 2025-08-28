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
    });
  }
}

function setupStartGameButton(game) {
  const startGameBtn = document.querySelector(
    ".btns-container button:last-child",
  );

  if (startGameBtn) {
    startGameBtn.addEventListener("click", () => {
      if (
        game.humanPlayer.gameboard.ships.length === 0 ||
        game.computerPlayer.gameboard.ships.length === 0
      ) {
        alert("Please randomize ships first before starting the game!");
        return;
      }

      game.isPlayerTurn = true;

      const instructionsSection = document.querySelector(".instructions");
      const buttonsContainer = document.querySelector(".btns-container");

      if (instructionsSection) instructionsSection.style.display = "none";
      if (buttonsContainer) buttonsContainer.style.display = "none";

      enableEnemyBoardAttacks(game);

      showGameStatus();
    });
  }
}

function enableEnemyBoardAttacks(game) {
  const enemyCells = document.querySelectorAll(".enemy-cell");

  enemyCells.forEach((cell, index) => {
    if (!cell.classList.contains("hit") && !cell.classList.contains("miss")) {
      cell.style.cursor = "crosshair";
    }

    cell.addEventListener("click", () => {
      const [x, y] = indexToCoords(index);
      handlePlayerAttack(game, x, y, cell);
    });
  });
}

function disableEnemyBoardAttacks() {
  const enemyCells = document.querySelectorAll(".enemy-cell");

  enemyCells.forEach((cell) => {
    if (!cell.classList.contains("hit") && !cell.classList.contains("miss")) {
      cell.style.cursor = "not-allowed";
    }
  });
}

function updateTurnIndicator(message) {
  const turnIndicator = document.querySelector(".turn-indicator");
  if (turnIndicator) {
    turnIndicator.textContent = message;
  }
}

function handlePlayerAttack(game, x, y, cell) {
  if (!game.isPlayerTurn) {
    return;
  }

  if (cell.classList.contains("hit") || cell.classList.contains("miss")) {
    return;
  }

  game.isPlayerTurn = false;
  disableEnemyBoardAttacks();
  updateTurnIndicator("Computer's turn...");

  const result = game.computerPlayer.gameboard.receiveAttack(x, y);

  if (result) {
    if (result.ship) {
      cell.classList.add("hit");
      cell.style.backgroundColor = "#dc5959";
      cell.style.borderColor = "#dc5959";

      if (result.ship.isSunken) {
        updateShipsDisplay(game.computerPlayer.gameboard, false);
      }
    } else {
      cell.classList.add("miss");
      cell.style.backgroundColor = "#234c5f";
      cell.style.borderColor = "#234c5f";
    }

    cell.style.cursor = "not-allowed";

    if (game.computerPlayer.gameboard.allShipsSunk()) {
      endGame("Player wins!");
      return;
    }

    setTimeout(() => {
      handleComputerAttack(game);
    }, 1500);
  }
}

function handleComputerAttack(game) {
  let x, y, alreadyAttacked;

  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    alreadyAttacked =
      game.humanPlayer.gameboard.hitAttacks.some(
        ([hx, hy]) => hx === x && hy === y,
      ) ||
      game.humanPlayer.gameboard.missedAttacks.some(
        ([mx, my]) => mx === x && my === y,
      );
  } while (alreadyAttacked);

  const result = game.humanPlayer.gameboard.receiveAttack(x, y);

  if (result) {
    const playerCells = document.querySelectorAll(".player-cell");
    const cellIndex = coordsToIndex(x, y);
    const cell = playerCells[cellIndex];

    if (result.ship) {
      cell.classList.add("hit");
      cell.style.backgroundColor = "#dc5959";
      cell.style.borderColor = "#dc5959";

      if (result.ship.isSunken) {
        updateShipsDisplay(game.humanPlayer.gameboard, true);
      }
    } else {
      cell.classList.add("miss");
      cell.style.backgroundColor = "#234c5f";
      cell.style.borderColor = "#234c5f";
    }

    if (game.humanPlayer.gameboard.allShipsSunk()) {
      endGame("Computer wins!");
      return;
    }

    setTimeout(() => {
      game.isPlayerTurn = true;
      enableEnemyBoardAttacks(game);
      updateTurnIndicator("Your turn - Click on enemy cells to attack!");
    }, 1000);
  }
}

function showGameStatus() {
  const bottomSection = document.querySelector(".bottom section");
  if (bottomSection) {
    bottomSection.innerHTML = `
      <div class="game-status">
        <p>Game in progress...</p>
        <p class="turn-indicator">Your turn - Click on enemy cells to attack!</p>
      </div>
    `;
  }
}

function updateShipsDisplay(gameboard, forPlayer = true) {
  const shipsContainer = forPlayer
    ? document.querySelector(".ships-container")
    : document.querySelector(".ships-container-enemy");

  if (!shipsContainer) return;

  const shipsDom = Array.from(shipsContainer.querySelectorAll(".ship"));

  shipsDom.forEach((domShip) => {
    domShip.classList.remove("sunk-marked");

    domShip.style.opacity = "";

    domShip.style.filter = "";
  });

  const domByLength = {};

  shipsDom.forEach((domShip) => {
    const len = domShip.querySelectorAll(".cell").length;

    domByLength[len] = domByLength[len] || [];

    domByLength[len].push(domShip);
  });

  const sunkCounts = {};

  gameboard.ships.forEach((shipData) => {
    if (shipData.ship.isSunken) {
      const L = shipData.ship.length;

      sunkCounts[L] = (sunkCounts[L] || 0) + 1;
    }
  });

  Object.entries(sunkCounts).forEach(([lenStr, count]) => {
    const len = Number(lenStr);

    const list = domByLength[len] || [];

    for (let i = 0; i < count && i < list.length; i++) {
      const domShip = list[i];

      domShip.style.opacity = "0.5";

      domShip.style.filter = "grayscale(100%)";

      domShip.classList.add("sunk-marked");
    }
  });
}

function endGame(message) {
  const bottomSection = document.querySelector(".bottom section");
  if (bottomSection) {
    bottomSection.innerHTML = `
      <div class="game-over">
        <p>${message}</p>
        <button onclick="location.reload()" class="btn-play-again">Play Again</button>
      </div>
    `;
  }

  const enemyCells = document.querySelectorAll(".enemy-cell");
  enemyCells.forEach((cell) => {
    cell.style.cursor = "not-allowed";
    cell.replaceWith(cell.cloneNode(true));
  });
}

export default userInterface;
export {
  renderGameboard,
  renderBothBoards,
  coordsToIndex,
  indexToCoords,
  randomizeShips,
  setupRandomizeButton,
  setupStartGameButton,
};
