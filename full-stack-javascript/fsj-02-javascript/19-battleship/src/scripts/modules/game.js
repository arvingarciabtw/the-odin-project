import { Ship, Gameboard, Player } from "./classes";
import userInterface, {
  renderBothBoards,
  setupRandomizeButton,
  setupStartGameButton,
} from "./interface";

class Game {
  constructor() {
    this.playerGameboard = new Gameboard();
    this.enemyGameboard = new Gameboard();

    this.humanPlayer = new Player("PLAYER", this.playerGameboard, "human");
    this.computerPlayer = new Player(
      "COMPUTER",
      this.enemyGameboard,
      "computer",
    );

    this.humanShips = this.createShipSet();
    this.computerShips = this.createShipSet();

    this.isPlayerTurn = false;
  }

  createShipSet() {
    return [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
  }

  renderBoards() {
    return renderBothBoards(
      this.humanPlayer.gameboard,
      this.computerPlayer.gameboard,
    );
  }

  initialize() {
    userInterface();

    this.renderBoards();

    setupRandomizeButton(
      this.humanPlayer.gameboard,
      this.computerPlayer.gameboard,
      this.humanShips,
      this.computerShips,
      () => this.renderBoards(),
    );

    setupStartGameButton(this);
  }

  getHumanPlayer() {
    return this.humanPlayer;
  }

  getComputerPlayer() {
    return this.computerPlayer;
  }

  getHumanShips() {
    return this.humanShips;
  }

  getComputerShips() {
    return this.computerShips;
  }
}

export default Game;
