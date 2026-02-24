/*
  --- THEME TOGGLE ---
*/
const root = document.querySelector("html");
const toggler = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".theme-toggle-icon");

if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
} else {
  root.classList.remove("dark");
}

toggler.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

/*
  --- MOBILE MENU ---
*/
const menu = document.querySelector(".menu-button");
const closeModal = document.querySelector(".close-modal-button");
const modal = document.querySelector(".modal");

menu.addEventListener("click", () => {
  if (modal.style.display === "grid") {
    modal.style.display = "none";
  } else {
    modal.style.display = "grid";
  }
});

closeModal.addEventListener("click", () => {
  if (modal.style.display === "grid") {
    modal.style.display = "none";
  } else {
    modal.style.display = "grid";
  }
});

/*
  --- GAME ---
*/
const gameStatus = document.querySelector(".game-status");
const buttons = document.querySelectorAll(".choice-btn");
const playerScoreEl = document.querySelector("#player-score");
const computerScoreEl = document.querySelector("#computer-score");

const TURN_DURATION = 2000;
const WINNING_SCORE = 5;

const outcomes = {
  rock: { beats: "scissors", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissors" },
  scissors: { beats: "paper", losesTo: "rock" },
};

function getComputerChoice() {
  const choices = Object.keys(outcomes);
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";
  return outcomes[playerChoice].beats === computerChoice
    ? "player"
    : "computer";
}

function updateScore(winner) {
  if (winner === "player") {
    playerScoreEl.textContent = Number(playerScoreEl.textContent) + 1;
  } else if (winner === "computer") {
    computerScoreEl.textContent = Number(computerScoreEl.textContent) + 1;
  }
}

function handleChoice(e) {
  const playerChoice = e.target.id.replace("-btn", "");
  const computerChoice = getComputerChoice();

  gameStatus.textContent = "Waiting for computer's move...";
  toggleButtons(true);

  setTimeout(() => {
    const winner = playRound(playerChoice, computerChoice);
    const messages = {
      player: "Player wins!",
      computer: "Computer wins!",
      draw: "No one wins...",
    };

    updateScore(winner);
    gameStatus.textContent = `Player chose ${playerChoice}. Computer chose ${computerChoice}. ${messages[winner]}`;

    if (
      Number(playerScoreEl.textContent) >= WINNING_SCORE ||
      Number(computerScoreEl.textContent) >= WINNING_SCORE
    ) {
      gameStatus.textContent = "Game over!";
      toggleButtons(true);
    } else {
      toggleButtons(false);
    }
  }, TURN_DURATION);
}

function toggleButtons(disabled) {
  buttons.forEach((btn) => (btn.disabled = disabled));
}

buttons.forEach((btn) => btn.addEventListener("click", handleChoice));
