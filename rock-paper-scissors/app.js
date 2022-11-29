const playerResult = document.querySelector("#playerMove");
const computerResult = document.querySelector("#computerMove");
const resultText = document.querySelector("#resultText");

const choiceButtons = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceButtons.forEach(button =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerResult.textContent = player;
    computerResult.textContent = computer;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if (player == computer) return "Draw!";
  else if (computer == "ROCK")
    return player == "PAPER" ? "You Win!" : "You Lose!";
  else if (computer == "PAPER")
    return player == "SCISSORS" ? "You Win!" : "You Lose!";
  else if (computer == "SCISSORS")
    return player == "ROCK" ? "You Win!" : "You Lose!";
}
