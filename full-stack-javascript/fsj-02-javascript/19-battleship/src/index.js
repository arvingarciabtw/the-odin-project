import "./styles/styles.css";
import { Ship } from "./scripts/modules/classes";

const ship1 = new Ship(5, 0);

console.log(ship1);
ship1.hit();
console.log("Ship has been hit!");
console.log(ship1);
ship1.hit();
ship1.hit();
ship1.hit();
ship1.hit();
console.log("Ship has been hit four times! It sank!!!");
ship1.isSunk(true);
console.log(ship1.isSunken);
console.log(ship1);
