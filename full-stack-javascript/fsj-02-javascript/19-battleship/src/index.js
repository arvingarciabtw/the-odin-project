import "./styles/styles.css";
import { Ship, Gameboard } from "./scripts/modules/classes";

const fiveWideShip = new Ship(5);
const fourWideShip = new Ship(4);
const gameboard = new Gameboard();

gameboard.renderBoard();
gameboard.placeShip(fiveWideShip, 0, 0, "alongX");
gameboard.placeShip(fourWideShip, 0, 0, "alongY"); // This should fail

console.log(gameboard.renderBoard());
