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

  knightMoves(start, end) {
    if (
      !this.isValidPosition(start[0], start[1]) ||
      !this.isValidPosition(end[0], end[1])
    ) {
      throw new Error("Invalid position: coordinates must be between 0 and 7");
    }

    if (start[0] === end[0] && start[1] === end[1]) {
      return [start];
    }

    const queue = [[start]];
    const visited = new Set();
    const startStr = this.positionToString(start);
    const endStr = this.positionToString(end);

    visited.add(startStr);

    while (queue.length > 0) {
      const currentPath = queue.shift();
      const currentPosition = currentPath[currentPath.length - 1];

      const validMoves = this.getValidMoves(currentPosition);

      for (const nextPosition of validMoves) {
        const nextPosStr = this.positionToString(nextPosition);

        if (visited.has(nextPosStr)) {
          continue;
        }

        const newPath = [...currentPath, nextPosition];

        if (nextPosStr === endStr) {
          return newPath;
        }

        visited.add(nextPosStr);
        queue.push(newPath);
      }
    }

    throw new Error("No path found");
  }

}
