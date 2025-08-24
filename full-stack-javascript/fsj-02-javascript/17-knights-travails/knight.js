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

  displayKnightMoves(start, end) {
    const path = this.knightMoves(start, end);
    const moves = path.length - 1;

    console.log(
      `You made it in ${moves} move${moves !== 1 ? "s" : ""}! Here's your path:`,
    );
    path.forEach((position) => {
      console.log(`  [${position[0]},${position[1]}]`);
    });

    return path;
  }
}

const knight = new Knight();

function knightMoves(start, end) {
  return knight.knightMoves(start, end);
}

console.log("-- KNIGHT'S TRAVAILS --\n");

console.log("Example 1: [0,0] to [1,2]");
console.log("Result:", knightMoves([0, 0], [1, 2]));
knight.displayKnightMoves([0, 0], [1, 2]);

console.log("\nExample 2: [0,0] to [3,3]");
console.log("Result:", knightMoves([0, 0], [3, 3]));
knight.displayKnightMoves([0, 0], [3, 3]);

console.log("\nExample 3: [3,3] to [0,0]");
console.log("Result:", knightMoves([3, 3], [0, 0]));
knight.displayKnightMoves([3, 3], [0, 0]);

console.log("\nExample 4: [0,0] to [7,7]");
console.log("Result:", knightMoves([0, 0], [7, 7]));
knight.displayKnightMoves([0, 0], [7, 7]);
