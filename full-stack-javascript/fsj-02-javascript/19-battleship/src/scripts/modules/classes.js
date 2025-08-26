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
  }

  renderBoard() {
    for (let i = 0; i < this.length; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.length; j++) {
        this.board[i].push("O");
      }
    }
    return this.board;
  }

  placeShip(ship, xCoord, yCoord, orientation) {
    let coordinates = [];

    if (orientation === "alongX") {
      for (let i = 0; i < ship.length; i++) {
        let shiftFactor = yCoord + i;

        if (shiftFactor >= this.length) {
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

        coordinates.push([shiftFactor, yCoord]);
      }
    }

    return coordinates;
  }
}

export { Ship, Gameboard };
