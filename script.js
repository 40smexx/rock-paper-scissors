console.log("Rock Paper Scissors started");

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter rock, paper or scissors:");

  if (choice === null) {
    return "rock";
  }

  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw! Both chose " + humanChoice);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }

    console.log("Score → Human:", humanScore, "| Computer:", computerScore);
  }

  // 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("FINAL RESULT");

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}

playGame();
