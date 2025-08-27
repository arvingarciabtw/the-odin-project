import "./styles/styles.css";
import userInterface, { renderBothBoards } from "./scripts/modules/interface";
import { Ship, Gameboard, Player } from "./scripts/modules/classes";

const playerGameboard = new Gameboard();
const enemyGameboard = new Gameboard();

const humanPlayer = new Player("PLAYER", playerGameboard, "human");
const computerPlayer = new Player("COMPUTER", enemyGameboard, "computer");

const humanFiveWideShip = new Ship(5);
const humanFourWideShip = new Ship(4);
const humanThreeWideShip = new Ship(3);
const humanThreeWideShip2 = new Ship(3);
const humanTwoWideShip = new Ship(2);

const computerFiveWideShip = new Ship(5);
const computerFourWideShip = new Ship(4);
const computerThreeWideShip = new Ship(3);
const computerThreeWideShip2 = new Ship(3);
const computerTwoWideShip = new Ship(2);

humanPlayer.gameboard.placeShip(humanFiveWideShip, 0, 0, "alongX");
humanPlayer.gameboard.placeShip(humanFourWideShip, 2, 1, "alongY");
humanPlayer.gameboard.placeShip(humanThreeWideShip, 9, 4, "alongX");
humanPlayer.gameboard.placeShip(humanThreeWideShip2, 3, 9, "alongY");
humanPlayer.gameboard.placeShip(humanTwoWideShip, 7, 7, "alongY");

computerPlayer.gameboard.placeShip(computerFiveWideShip, 8, 0, "alongX");
computerPlayer.gameboard.placeShip(computerFourWideShip, 0, 8, "alongY");
computerPlayer.gameboard.placeShip(computerThreeWideShip, 4, 1, "alongX");
computerPlayer.gameboard.placeShip(computerThreeWideShip2, 1, 0, "alongY");
computerPlayer.gameboard.placeShip(computerTwoWideShip, 6, 6, "alongY");

userInterface();

renderBothBoards(humanPlayer.gameboard, computerPlayer.gameboard);

console.log("Player's board: ");
console.log(humanPlayer.gameboard.renderBoard());

console.log("Computer's board: ");
console.log(computerPlayer.gameboard.renderBoard());
