// You’re going to store the gameboard as an array inside of a Gameboard object, so start there!
// Your players are also going to be stored in objects, and you’re probably going to want an object to
// control the flow of the game itself.
//
// Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories.
// If you only need a single instance of something (e.g. the gameboard, the displayController etc.)
// then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
//
// In this project, think carefully about where each bit of logic should reside.
// Each little piece of functionality should be able to fit in the game, player or gameboard objects.
// Take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!
//
// Focus on getting a working game in the console first. Make sure you include logic that checks for when the
// game is over! You should be checking for all winning 3-in-a-rows and ties. Try to avoid thinking about the DOM
// and your HTML/CSS until your game is working. Don’t worry about taking user input at this point either.
// You can call your functions and pass arguments to them to play the game yourself and check if everything is
// working as intended.

// PLAN
// Game will be in the console FOR NOW
// TWO user inputs: x (for user 1) and o (for user 2)
// Output should be a WORKING GAME in the CONSOLE
//
// Below are visual representations, but they should be FACTORY FUNCTIONS!!!!!
// const Gameboard = {
//    gamebaord: [],
// }
//
// const Player = {
//    name: string;
//    score: number;
// }
//
// const Game = {
//
// }

// PSEUDOCODE
// GET USER INPUTS
// -- Since it will be 3x3, essentially we should get an input 9 times.
// -- Should alternate between user 1 and user 2 ( x then o, then x...)
// -- After each input, push it into an array?
// -- Once we get everything, log the final array
// -- Maybe log a 3x3 output based from that array
//

function createPlayer(name, move) {
  const getName = () => name;
  const getMove = () => move;

  return { getName, getMove };
}

const game = (function () {
  const logMove = (playerName, playerMove) =>
    playerName + "'s move is: " + playerMove;

  return { logMove };
})();

const player1 = createPlayer("Batman", "x");
const player2 = createPlayer("Superman", "o");

const INPUT_AMOUNT = 9;

for (let i = 1; i <= INPUT_AMOUNT; i++) {
  if (i % 2 !== 0) {
    console.log(i + ". " + game.logMove(player1.getName(), player1.getMove()));
  } else {
    console.log(i + ". " + game.logMove(player2.getName(), player2.getMove()));
  }
}
