import { coordsToIndex, indexToCoords } from "../utils/dom-utils";
import { updateTurnIndicator, updateShipsDisplay, endGame } from "./ui-handler";

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

export {
  enableEnemyBoardAttacks,
  disableEnemyBoardAttacks,
  handlePlayerAttack,
  handleComputerAttack,
};
