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
    if (board[row][column].getValue() !== "") {
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
  let value = "";

  const updateSquare = (moveType) => {
    value = moveType;
  };

  const getValue = () => value;

  return {
    updateSquare,
    getValue,
  };
}

function Game(playerOneName = "Player One", playerTwoName = "Player Two") {
  const board = Gameboard();
  const actualBoard = board.getBoard();
  let counter = 0;
  const players = [
    { name: playerOneName, moveType: "X" },
    { name: playerTwoName, moveType: "O" },
  ];

  let activePlayer = players[0];

  const switchActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;
  const getCounter = () => counter;

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

    const triggeredMove = board.makeMove(
      row,
      column,
      getActivePlayer().moveType,
    );

    if (triggeredMove) {
      if (!checkWin(actualBoard)) {
        switchActivePlayer();
      }

      counter++;
    } else {
      return;
    }
  };

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

      if (val1 !== "" && val1 === val2 && val2 === val3) {
        return true;
      }
    }
    return null;
  };

  return {
    getActivePlayer,
    getCounter,
    playRound,
    checkWin,
    getBoard: board.getBoard,
  };
}

function UI() {
  const playerOneName = document.querySelector(".player-one-input").value;
  const playerTwoName = document.querySelector(".player-two-input").value;
  const turn = document.querySelector(".turn");
  const boardContainer = document.querySelector(".board-container");
  const game = Game(playerOneName, playerTwoName);

  const updateScreen = () => {
    boardContainer.textContent = "";

    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    turn.textContent = `${activePlayer.name}'s turn...`;

    let rowNum = 0;
    board.forEach((row) => {
      row.forEach((square, index) => {
        const squareButton = document.createElement("button");
        squareButton.classList.add("square");
        squareButton.dataset.column = index;
        squareButton.dataset.row = rowNum;
        squareButton.textContent = square.getValue();
        squareButton.style.color = square.getValue() === "X" ? "#e3a134" : "#6882e2";
        boardContainer.appendChild(squareButton);
      });
      rowNum++;
    });

    let isOver = game.checkWin(board);

    function disableSquares () {
      const allSquares = document.querySelectorAll(".square");
      for (const square of allSquares) {
        square.setAttribute("disabled", "disabled");
      }
    }

    if (isOver) {
      turn.textContent = `${activePlayer.name} won!`;
      startGameButton.textContent = "Restart Game";
      disableSquares();
    }

    if (!isOver && (game.getCounter() === 9)) {
      turn.textContent = "It's a draw!";
      startGameButton.textContent = "Restart Game";
      disableSquares();
    }
  };

  function clickHandlerBoard(e) {
    const selectedColumn = e.target.dataset.column;
    const selectedRow = e.target.dataset.row;

    if (!selectedColumn) return;

    game.playRound(selectedRow, selectedColumn);
    updateScreen();
  }

  boardContainer.addEventListener("click", clickHandlerBoard);
  updateScreen();
}

const startGameButton = document.querySelector(".btn-start-game");
startGameButton.addEventListener("click", () => {
  UI();
});
