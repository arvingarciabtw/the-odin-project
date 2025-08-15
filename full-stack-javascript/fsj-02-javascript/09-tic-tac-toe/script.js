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

  const printBoard = () => {
    const boardWithSquareValues = board.map((row) =>
      row.map((square) => square.getValue()),
    );
    console.log(boardWithSquareValues);
  };

  return { getBoard, printBoard };
}

function Square() {
  let value = 0;

  // Trigger player's move to change the value of the square
  const triggerMove = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    triggerMove,
    getValue,
  };
}

function Game(playerOneName = "Batman", playerTwoName = "Superman") {
  const board = Gameboard();
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
    console.log(`${getActivePlayer().name}'s turn.`);
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
      `${getActivePlayer().name} is making a move on row ${row} and column ${column}`,
    );

    // Trigger a move here?
    // board.triggerMove(row, column, getActivePlayer().moveType)

    switchActivePlayer();
    printNewRound();
  };

  printNewRound();

  return { getActivePlayer, playRound };
}

const game = Game();
