function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Square());
    }
  }

  const getBoard = () => board;

  const makeMove = (row, column, moveType) => {
    if (board[row][column].getValue() !== 0) {
      console.error("This spot is already taken. Choose a free one.");
      return false;
    } else {
      board[row][column].updateSquare(moveType);
      return true;
    }
  };

  const printBoard = () => {
    const boardWithSquareValues = board.map((row) =>
      row.map((square) => square.getValue()),
    );
    console.log(boardWithSquareValues);
  };

  return { getBoard, printBoard, makeMove };
}

function Square() {
  let value = 0;

  const updateSquare = (moveType) => {
    value = moveType;
  };

  const getValue = () => value;

  return {
    updateSquare,
    getValue,
  };
}

function Game(playerOneName = "Batman", playerTwoName = "Superman") {
  const board = Gameboard();
  const actualBoard = board.getBoard();
  let counter = 0;
  const players = [
    { name: playerOneName, moveType: 1 },
    { name: playerTwoName, moveType: 2 },
  ];

  let activePlayer = players[0];

  const switchActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`It is now ${getActivePlayer().name}'s turn!`);
  };

  const playRound = (row, column) => {
    if (row < 0 || row > 2) {
      throw new Error(
        "The game is played on a 3x3 grid. ROW should be 0, 1, or 2.",
      );
    }

    if (column < 0 || column > 2) {
      throw new Error(
        "The game is played on a 3x3 grid. COLUMN should be 0, 1, or 2.",
      );
    }

    console.log(
      `${getActivePlayer().name} made a move on row ${row} and column ${column}.`,
    );

    const triggeredMove = board.makeMove(
      row,
      column,
      getActivePlayer().moveType,
    );

    const checkWin = (actualBoard) => {
      const winConditions = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
      ];

      for (const condition of winConditions) {
        const [pos1, pos2, pos3] = condition;

        const val1 = actualBoard[pos1[0]][pos1[1]].getValue();
        const val2 = actualBoard[pos2[0]][pos2[1]].getValue();
        const val3 = actualBoard[pos3[0]][pos3[1]].getValue();

        if (val1 !== 0 && val1 === val2 && val2 === val3) {
          return true;
        }

      }
        return null;
    };

    if (triggeredMove) {
      if (checkWin(actualBoard)) {
        board.printBoard();
        console.log(`${getActivePlayer().name} won!`);
      } else {
        switchActivePlayer();
        printNewRound();
      }

      counter++;
      if (counter === 9) {
        console.log("It's a draw!")
      }

    } else {
      return;
    }
  };

  printNewRound();

  return { getActivePlayer, playRound };
}

const game = Game();
