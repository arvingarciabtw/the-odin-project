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

  function playRound(humanChoice, computerChoice) {
    function printChoices() {
      console.log(
        `Computer chose ${computerChoice}.\nYou chose ${humanChoice}.`,
      );
    }

    function printDrawResult() {
      console.log(
        `It's a draw!\nComputer score: ${computerScore}\nHuman score: ${humanScore}`,
      );
    }

    // Draw conditions
    if (humanChoice === "rock" && computerChoice === "rock") {
      printChoices();
      printDrawResult();
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      printChoices();
      printDrawResult();
    }
    if (humanChoice === "scissors" && computerChoice === "scissors") {
      printChoices();
      printDrawResult();
    }

    // Human win conditions
    if (humanChoice === "rock" && computerChoice === "scissors") {
    }
  }

  playRound(getHumanChoice(), "paper");
}

playGame();
