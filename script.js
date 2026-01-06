console.log("Rock Paper Scissors started");

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  else if (randomNumber < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const choice = prompt("Enter rock, paper or scissors:");
  if (choice === null) return "rock";
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw!");
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win!");
    } else {
      computerScore++;
      console.log("You lose!");
    }

    console.log("Score:", humanScore, computerScore);
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log("FINAL SCORE:", humanScore, computerScore);
}

playGame();
