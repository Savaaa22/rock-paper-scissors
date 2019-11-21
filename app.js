let userScore = 0;
let computerScore = 0;
const usetScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  usetScore_span.innerHTML = userScore;
  result_div.innerHTML =
    convertToWord(userChoice) +
    " beats " +
    convertToWord(computerChoice) +
    ". You win!";
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);
}
function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(
    computerChoice
  )} beats ${convertToWord(userChoice)}. You lose!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);
}
function draw(userChoice, computerChoice) {
  result_div.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )}. It's a draw!`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 500);
}
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}
main();
