function updateTurnIndicator(message) {
  const turnIndicator = document.querySelector(".turn-indicator");
  if (turnIndicator) {
    turnIndicator.textContent = message;
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
    cell.replaceWith(cell.cloneNode(true)); // Remove event listeners
  });
}

export { updateTurnIndicator, showGameStatus, updateShipsDisplay, endGame };
