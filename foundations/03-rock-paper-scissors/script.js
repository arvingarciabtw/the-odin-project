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

const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

rock.addEventListener("click", () => {
  const computerChoice = getComputerChoice();

  const base = `Player clicked the rock button. Computer chose ${computerChoice}.`;
  let victoryMessage;

  switch (computerChoice) {
    case "rock":
      victoryMessage = "No one wins...";
      break;
    case "paper":
      victoryMessage = "Computer wins!";
      setTimeout(() => {
        computerScore.textContent = Number(computerScore.textContent) + 1;
      }, 2000);
      break;
    case "scissors":
      victoryMessage = "Player wins!";
      setTimeout(() => {
        playerScore.textContent = Number(playerScore.textContent) + 1;
      }, 2000);
      break;
    default:
      victoryMessage = "";
      break;
  }

  gameStatus.textContent = "Waiting for computer's move...";

  rock.setAttribute("disabled", true);
  paper.setAttribute("disabled", true);
  scissors.setAttribute("disabled", true);

  setTimeout(() => {
    gameStatus.textContent = `${base} ${victoryMessage}`;

    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");

    if (playerScore.textContent === "5" || computerScore.textContent === "5") {
      rock.setAttribute("disabled", true);
      paper.setAttribute("disabled", true);
      scissors.setAttribute("disabled", true);

      gameStatus.textContent = "Game over!";
    }
  }, 2000);
});
paper.addEventListener("click", () => {
  const computerChoice = getComputerChoice();

  const base = `Player clicked the paper button. Computer chose ${computerChoice}.`;
  let victoryMessage;

  switch (computerChoice) {
    case "rock":
      victoryMessage = "Player wins!";
      setTimeout(() => {
        playerScore.textContent = Number(playerScore.textContent) + 1;

        if (playerScore.textContent === "5") {
          rock.setAttribute("disabled", true);
          paper.setAttribute("disabled", true);
          scissors.setAttribute("disabled", true);
        }
      }, 2000);
      break;
    case "paper":
      victoryMessage = "No one wins...";
      break;
    case "scissors":
      victoryMessage = "Computer wins!";
      setTimeout(() => {
        computerScore.textContent = Number(computerScore.textContent) + 1;

        if (computerScore.textContent === "5") {
          rock.setAttribute("disabled", true);
          paper.setAttribute("disabled", true);
          scissors.setAttribute("disabled", true);
        }
      }, 2000);
      break;
    default:
      victoryMessage = "";
      break;
  }

  gameStatus.textContent = "Waiting for computer's move...";

  rock.setAttribute("disabled", true);
  paper.setAttribute("disabled", true);
  scissors.setAttribute("disabled", true);

  setTimeout(() => {
    gameStatus.textContent = `${base} ${victoryMessage}`;

    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");

    if (playerScore.textContent === "5" || computerScore.textContent === "5") {
      rock.setAttribute("disabled", true);
      paper.setAttribute("disabled", true);
      scissors.setAttribute("disabled", true);

      gameStatus.textContent = "Game over!";
    }
  }, 2000);
});
scissors.addEventListener("click", () => {
  const computerChoice = getComputerChoice();

  const base = `Player clicked the scissors button. Computer chose ${computerChoice}.`;
  let victoryMessage;

  switch (computerChoice) {
    case "rock":
      victoryMessage = "Computer wins!";
      setTimeout(() => {
        computerScore.textContent = Number(computerScore.textContent) + 1;

        if (computerScore.textContent === "5") {
          rock.setAttribute("disabled", true);
          paper.setAttribute("disabled", true);
          scissors.setAttribute("disabled", true);
        }
      }, 2000);
      break;
    case "paper":
      victoryMessage = "Player wins!";
      setTimeout(() => {
        playerScore.textContent = Number(playerScore.textContent) + 1;

        if (playerScore.textContent === "5") {
          rock.setAttribute("disabled", true);
          paper.setAttribute("disabled", true);
          scissors.setAttribute("disabled", true);
        }
      }, 2000);
      break;
    case "scissors":
      victoryMessage = "No one wins!";
      break;
    default:
      victoryMessage = "";
      break;
  }

  gameStatus.textContent = "Waiting for computer's move...";

  rock.setAttribute("disabled", true);
  paper.setAttribute("disabled", true);
  scissors.setAttribute("disabled", true);

  setTimeout(() => {
    gameStatus.textContent = `${base} ${victoryMessage}`;

    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");

    if (playerScore.textContent === "5" || computerScore.textContent === "5") {
      rock.setAttribute("disabled", true);
      paper.setAttribute("disabled", true);
      scissors.setAttribute("disabled", true);

      gameStatus.textContent = "Game over!";
    }
  }, 2000);
});

function getComputerChoice() {
  const num = Math.random();

  if (num <= 0.33) {
    return "rock";
  } else if (num <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
