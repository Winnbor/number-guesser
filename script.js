let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  const randomInt = Math.floor(Math.random() * 10);
  return randomInt;
}

function compareGuesses(a, b, c) {
  if (a < 0 || a > 9) {
    alert("BooHaHa!");
  } else if (Math.abs(a - c) <= Math.abs(b - c)) {
    return true;
  } else {
    return false;
  }
}

function updateScore(param) {
  if (param === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}
