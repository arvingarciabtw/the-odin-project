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

describe("render the board after placing a/some ship/s", () => {
  test("render after placing a ship along X at [0, 0]", () => {
    const fiveWideShip = new Ship(5);
    const gameboard = new Gameboard();
    gameboard.renderBoard();
    gameboard.placeShip(fiveWideShip, 0, 0, "alongX");

    expect(gameboard.renderBoard()).toStrictEqual([
      ["S", "S", "S", "S", "S", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });

  test("render after invalidly placing another ship along Y at [0, 0]", () => {
    const fiveWideShip = new Ship(5);
    const fourWideShip = new Ship(4);
    const gameboard = new Gameboard();

    gameboard.renderBoard();
    gameboard.placeShip(fiveWideShip, 0, 0, "alongX");
    gameboard.placeShip(fourWideShip, 0, 0, "alongY");

    expect(gameboard.renderBoard()).toStrictEqual([
      ["S", "S", "S", "S", "S", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });

  test("render after validly placing another ship along Y at [1, 0]", () => {
    const fiveWideShip = new Ship(5);
    const fourWideShip = new Ship(4);
    const gameboard = new Gameboard();

    gameboard.renderBoard();
    gameboard.placeShip(fiveWideShip, 0, 0, "alongX");
    gameboard.placeShip(fourWideShip, 1, 0, "alongY");

    expect(gameboard.renderBoard()).toStrictEqual([
      ["S", "S", "S", "S", "S", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });

  test("render after invalidly placing another ship along X at [3, 0]", () => {
    const fiveWideShip = new Ship(5);
    const fourWideShip = new Ship(4);
    const threeWideShip = new Ship(3);
    const gameboard = new Gameboard();

    gameboard.renderBoard();
    gameboard.placeShip(fiveWideShip, 0, 0, "alongX");
    gameboard.placeShip(fourWideShip, 1, 0, "alongY");
    gameboard.placeShip(threeWideShip, 3, 0, "alongX");

    expect(gameboard.renderBoard()).toStrictEqual([
      ["S", "S", "S", "S", "S", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });

  test("render after invalidly placing another ship along X at [7, 7]", () => {
    const fiveWideShip = new Ship(5);
    const fourWideShip = new Ship(4);
    const threeWideShip = new Ship(3);
    const gameboard = new Gameboard();

    gameboard.renderBoard();
    gameboard.placeShip(fiveWideShip, 0, 0, "alongX");
    gameboard.placeShip(fourWideShip, 1, 0, "alongY");
    gameboard.placeShip(threeWideShip, 7, 7, "alongX");

    expect(gameboard.renderBoard()).toStrictEqual([
      ["S", "S", "S", "S", "S", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });

  test("render after validly placing another ship along X at [6, 3]", () => {
    const fiveWideShip = new Ship(5);
    const fourWideShip = new Ship(4);
    const threeWideShip = new Ship(3);
    const gameboard = new Gameboard();

    gameboard.renderBoard();
    gameboard.placeShip(fiveWideShip, 0, 0, "alongX");
    gameboard.placeShip(fourWideShip, 1, 0, "alongY");
    gameboard.placeShip(threeWideShip, 6, 3, "alongX");

    expect(gameboard.renderBoard()).toStrictEqual([
      ["S", "S", "S", "S", "S", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "S", "S", "S", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });

  test("render after invalidly placing another ship along Y at [4, 3]", () => {
    const fiveWideShip = new Ship(5);
    const fourWideShip = new Ship(4);
    const threeWideShip = new Ship(3);
    const fourWideShipTwo = new Ship(4);
    const gameboard = new Gameboard();

    gameboard.renderBoard();
    gameboard.placeShip(fiveWideShip, 0, 0, "alongX");
    gameboard.placeShip(fourWideShip, 1, 0, "alongY");
    gameboard.placeShip(threeWideShip, 6, 3, "alongX");
    gameboard.placeShip(fourWideShipTwo, 4, 3, "alongY");

    expect(gameboard.renderBoard()).toStrictEqual([
      ["S", "S", "S", "S", "S", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "S", "S", "S", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });

  test("render after invalidly placing another ship along Y at [3, 3]", () => {
    const fiveWideShip = new Ship(5);
    const fourWideShip = new Ship(4);
    const threeWideShip = new Ship(3);
    const fourWideShipTwo = new Ship(4);
    const gameboard = new Gameboard();

    gameboard.renderBoard();
    gameboard.placeShip(fiveWideShip, 0, 0, "alongX");
    gameboard.placeShip(fourWideShip, 1, 0, "alongY");
    gameboard.placeShip(threeWideShip, 6, 3, "alongX");
    gameboard.placeShip(fourWideShipTwo, 4, 3, "alongY");

    expect(gameboard.renderBoard()).toStrictEqual([
      ["S", "S", "S", "S", "S", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["S", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "S", "S", "S", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
  });
});
