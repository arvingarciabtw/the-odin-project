// --- GENERAL INSTRUCTIONS ---
// Have a function named getComputerChoice that returns "rock", "paper", or "scissors"
// Have a function named getHumanChoice that returns "rock", "paper", or "scissors"
// Have humanScore and computerScore variables in the global scope
// Have a function named playRound that takes two parameters: humanChoice and computerChoice
// Have a function named playGame that calls playRound five times
// The humanChoice must be case-insensitive
// The playRound function and score variables should be inside the playGame
// Loops may be used

// --- PLAN ---
// Interface: Game will only be played in the browser console
// Inputs: One user input (rock, paper, scissors, [invalid inputs]) taken via prompt, repeated five times
// Output:
//-- The game should be repeated five times. Round number should be indicated.
//-- In each round, while the prompt is active, the console should log a "Computer choosing..." message.
//-- Prompt will be repeated until user enters a valid input.
//-- Both human and computer choices should be logged in the console.
//-- The winner shall be logged, and the current scores.
//-- Once five rounds has passed, a game end message should be logged.

// --- PSEUDOCODE ---
// Invoke playGame
//-- Declare humanScore and computerScore
//-- Initialize humanScore and computerScore to 0
//-- Log game start message
//-- For five rounds, invoke playRound
//---- Log round number
//---- Log "Computer choosing..."
//---- Ask for valid user input
//---- If statements for winning conditions
//---- Log winner and increment winner's score
//-- Log game end message

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

function getHumanChoice() {
  let result = prompt("Enter your move! (rock, paper, scissors)");

  // Result is null if user clicks Cancel. Using the toLowerCase method on a null data type will cause a TypeError.
  // As a solution, if it is null (or canceled), then the user will still be redirected to the while loop.
  if (result !== null) {
    result = result.toLowerCase();
  }

  if (result === "rock" || result === "paper" || result === "scissors") {
    return result;
  } else {
    while (result !== "rock" || result !== "paper" || result !== "scissors") {
      result = prompt(
        "It seems your input is invalid. Enter your move again! (rock, paper, scissors)",
      );

      if (result !== null) {
        result = result.toLowerCase();
      }

      if (result === "rock" || result === "paper" || result === "scissors") {
        return result;
      }
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Game start message
  console.log(
    "---------- ROCK PAPER SCISSORS ----------\n\nWelcome to rock paper scissors! The rules are simple.\nYou have three moves: rock, paper, or scissors.\nRock beats scissors, scissors beats paper, and paper beats rock.\n\nYou will be playing five rounds against a computer.",
  );

  function playRound(humanChoice, computerChoice) {
    function printChoices() {
      return `Computer chose ${computerChoice}.\nYou chose ${humanChoice}.\n\n`;
    }

    function printDrawResult() {
      return `It's a draw!\nComputer score: ${computerScore}\nHuman score: ${humanScore}`;
    }

    function printHumanWin() {
      return `You win!\nComputer score: ${computerScore}\nHuman score: ${++humanScore}`;
    }

    function printComputerWin() {
      return `Computer wins!\nComputer score: ${++computerScore}\nHuman score: ${humanScore}`;
    }

    function printMessage(winCondition) {
      if (winCondition === "draw") {
        console.log(printChoices() + printDrawResult());
      } else if (winCondition === "humanWin") {
        console.log(printChoices() + printHumanWin());
      } else if (winCondition === "computerWin") {
        console.log(printChoices() + printComputerWin());
      }
    }

    // Draw conditions
    if (humanChoice === "rock" && computerChoice === "rock") {
      printMessage("draw");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      printMessage("draw");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      printMessage("draw");
    }

    // Human win conditions
    if (humanChoice === "rock" && computerChoice === "scissors") {
      printMessage("humanWin");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      printMessage("humanWin");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      printMessage("humanWin");
    }

    // Computer win conditions
    if (humanChoice === "scissors" && computerChoice === "rock") {
      printMessage("computerWin");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      printMessage("computerWin");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      printMessage("computerWin");
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`// ROUND ${i + 1} //\n`);
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame();
