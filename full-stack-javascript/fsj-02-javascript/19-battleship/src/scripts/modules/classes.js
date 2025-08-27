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
    this.hitAttacks = [];
    this.ships = [];
  }

  renderBoard() {
    for (let i = 0; i < this.length; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.length; j++) {
        this.board[i].push("O");
      }
    }

    this.ships.forEach((shipData) => {
      shipData.coordinates.forEach(([x, y]) => {
        this.board[x][y] = "S";
      });
    });

    this.hitAttacks.forEach(([x, y]) => {
      this.board[x][y] = "H";
    });

    this.missedAttacks.forEach(([x, y]) => {
      this.board[x][y] = "X";
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

    if (coordinates.length > 0) {
      this.ships.push({
        ship: ship,
        coordinates: coordinates,
      });
    }

    return coordinates;
  }

  receiveAttack(xCoord, yCoord) {
    this.renderBoard();

    let cell = this.board[xCoord][yCoord];

    if (cell === "S") {
      const hitShip = this.ships.find((shipData) =>
        shipData.coordinates.some(([x, y]) => x === xCoord && y === yCoord),
      );

      if (hitShip) {
        hitShip.ship.hit();
        this.hitAttacks.push([xCoord, yCoord]);
        return {
          message: "Hit a ship!",
          ship: hitShip.ship,
          coordinates: [xCoord, yCoord],
        };
      }
    } else if (cell === "O") {
      this.missedAttacks.push([xCoord, yCoord]);
      return {
        message: "Hit empty water!",
        ship: null,
        coordinates: [xCoord, yCoord],
      };
    }
  }

  allShipsSunk() {
    return this.ships.every((shipData) => shipData.ship.isSunken);
  }
}

export { Ship, Gameboard };
