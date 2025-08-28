import { createGrids, renderBothBoards } from "../utils/dom-utils";
import { setupRandomizeButton, setupStartGameButton } from "./events-handler";

function userInterface() {
  createGrids();
}

export default userInterface;
export { renderBothBoards, setupRandomizeButton, setupStartGameButton };

export {
  coordsToIndex,
  indexToCoords,
  renderGameboard,
} from "../utils/dom-utils";
export { randomizeShips } from "./ship-handler";
export {
  updateTurnIndicator,
  showGameStatus,
  updateShipsDisplay,
  endGame,
} from "./ui-handler";
export {
  enableEnemyBoardAttacks,
  disableEnemyBoardAttacks,
  handlePlayerAttack,
  handleComputerAttack,
} from "./attack-handler";
