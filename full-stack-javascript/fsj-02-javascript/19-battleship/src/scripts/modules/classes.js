class Ship {
  constructor(length, hitCount = 0) {
    this.length = length;
    this.hitCount = hitCount;
    this.isSunken = false;
  }

  hit() {
    if (this.hitCount < this.length) {
      this.hitCount += 1;
      this.hitCount === this.length ? this.isSunk() : null;
    }
  }

  isSunk() {
    this.hitCount === this.length ? (this.isSunken = true) : this.isSunken;
  }
}

class Gameboard {
  constructor() {
    this.length = 8;
    this.board = [];
    this.missedAttacks = [];
    this.ships = [];
  }

  renderBoard() {
    for (let i = 0; i < this.length; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.length; j++) {
        this.board[i].push("O");
      }
    }

    this.ships.forEach((coordinates) => {
      coordinates.forEach(([x, y]) => {
        this.board[x][y] = "S";
      });
    });

    return this.board;
  }

  placeShip(ship, xCoord, yCoord, orientation) {
    let coordinates = [];

    this.renderBoard();

    if (orientation === "alongX") {
      for (let i = 0; i < ship.length; i++) {
        let shiftFactor = yCoord + i;

        if (shiftFactor >= this.length) {
          coordinates = [];
          return coordinates;
        }

        let cell = this.board[xCoord][shiftFactor];

        if (cell === "S") {
          coordinates = [];
          return coordinates;
        }

        coordinates.push([xCoord, shiftFactor]);
      }
    }

    if (orientation === "alongY") {
      for (let i = 0; i < ship.length; i++) {
        let shiftFactor = xCoord + i;

        if (shiftFactor >= this.length) {
          coordinates = [];
          return coordinates;
        }

        let cell = this.board[shiftFactor][yCoord];

        if (cell === "S") {
          coordinates = [];
          return coordinates;
        }

        coordinates.push([shiftFactor, yCoord]);
      }
    }

    coordinates.length > 0;
    this.ships.push(coordinates);

    return coordinates;
  }
}

export { Ship, Gameboard };
