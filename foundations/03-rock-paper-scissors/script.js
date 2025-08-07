const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const buttonsContainer = document.querySelector(".buttons-container");
const humanScoreElement = document.querySelector(".human-score .score");
const computerScoreElement = document.querySelector(".computer-score .score");
const humanMoveElement = document.querySelector(".human-move");
const computerMoveElement = document.querySelector(".computer-move");
const container = document.querySelector(".container");
const winnerMessage = document.querySelector(".move-message");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.random();
  let computerChoice = "";

  if (randomNum > 0 && randomNum <= 0.33) {
    computerChoice = "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  function updateResult(winCondition) {
    humanMoveElement.textContent = humanChoice.toUpperCase();
    computerMoveElement.textContent = computerChoice.toUpperCase();

    if (winCondition === "humanWin") {
      humanScoreElement.textContent = ++humanScore;
    } else if (winCondition === "computerWin") {
      computerScoreElement.textContent = ++computerScore;
    }
  }

  // Draw conditions
  if (humanChoice === "rock" && computerChoice === "rock") {
    updateResult();
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    updateResult();
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    updateResult();
  }

  // Human win conditions
  if (humanChoice === "rock" && computerChoice === "scissors") {
    updateResult("humanWin");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    updateResult("humanWin");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    updateResult("humanWin");
  }

  // Computer win conditions
  if (humanChoice === "scissors" && computerChoice === "rock") {
    updateResult("computerWin");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    updateResult("computerWin");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    updateResult("computerWin");
  }

  if (humanScore === 5 || computerScore === 5) {
    rockButton.setAttribute("disabled", "disabled");
    paperButton.setAttribute("disabled", "disabled");
    scissorsButton.setAttribute("disabled", "disabled");

    if (humanScore === 5) {
      winnerMessage.textContent = "Game over! You won!";
    } else {
      winnerMessage.textContent = "Game over! Computer won!";
    }
  }
}

buttonsContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.className) {
    case "rock-button":
      playRound("rock", getComputerChoice());
      break;
    case "paper-button":
      playRound("paper", getComputerChoice());
      break;
    case "scissors-button":
      playRound("scissors", getComputerChoice());
      break;
  }
});
