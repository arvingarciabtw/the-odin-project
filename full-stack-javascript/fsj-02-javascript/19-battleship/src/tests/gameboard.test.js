import { Ship, Gameboard } from "../scripts/modules/classes";

describe("renderBoard()", () => {
  test("render empty board", () => {
    const gameboard = new Gameboard();
    expect(gameboard.renderBoard()).toStrictEqual([
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });
});

describe("placeShip()", () => {
  const ship = new Ship(5);
  test("place a ship along x", () => {
    const gameboard = new Gameboard();
    gameboard.renderBoard();
    expect(gameboard.placeShip(ship, 1, 2, "alongX")).toStrictEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
    ]);
  });
  test("place a ship along y", () => {
    const gameboard = new Gameboard();
    gameboard.renderBoard();
    expect(gameboard.placeShip(ship, 1, 2, "alongY")).toStrictEqual([
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
    ]);
  });
  test("invalidly place a ship along x", () => {
    const gameboard = new Gameboard();
    gameboard.renderBoard();
    expect(gameboard.placeShip(ship, 0, 6, "alongX")).toStrictEqual([]);
  });
  test("invalidly place a ship along y", () => {
    const gameboard = new Gameboard();
    gameboard.renderBoard();
    expect(gameboard.placeShip(ship, 7, 6, "alongY")).toStrictEqual([]);
  });
});
