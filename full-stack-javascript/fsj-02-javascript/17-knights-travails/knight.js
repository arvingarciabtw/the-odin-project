class Knight {
  constructor() {
    this.moves = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];
  }

  isValidPosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  getValidMoves(position) {
    const [x, y] = position;
    const validMoves = [];

    for (const [dx, dy] of this.moves) {
      const newX = x + dx;
      const newY = y + dy;

      if (this.isValidPosition(newX, newY)) {
        validMoves.push([newX, newY]);
      }
    }

    return validMoves;
  }

  positionToString(position) {
    return `${position[0]},${position[1]}`;
  }

  stringToPosition(posStr) {
    return posStr.split(",").map(Number);
  }

}
