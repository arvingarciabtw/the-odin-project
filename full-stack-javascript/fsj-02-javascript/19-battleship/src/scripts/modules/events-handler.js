import { randomizeShips } from "./ship-handler";
import { enableEnemyBoardAttacks } from "./attack-handler";
import { showGameStatus } from "./ui-handler";

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

export { setupRandomizeButton, setupStartGameButton };
