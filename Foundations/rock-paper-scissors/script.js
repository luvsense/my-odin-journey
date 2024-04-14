const rockBtn = document.querySelector('.rockbtn');
const paperBtn = document.querySelector('.paperbtn');
const scissorBtn = document.querySelector('.scissorbtn');
const result = document.querySelector('.result');
const playBtn = document.querySelectorAll('.playbtn');
const displayRounds = document.querySelector('.displayRounds');
const displayScores = document.querySelector('.displayScores');
const resetGame = document.querySelector('.resetGame');
let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;
playGame = true;

function disableButtons() {
  for (let btn of playBtn) {
    btn.disabled = true;
    resetGame.className = 'button is-danger is-fullwidth resetGame';
  }
}

function checkGameStaus() {
  if (totalRounds >= 5) {
    playGame = false;

    disableButtons();
  }
}

if (!playGame) {
  disableButtons();
} else {
  rockBtn.addEventListener('click', function () {
    playRound('rock');
  });

  paperBtn.addEventListener('click', function () {
    playRound('paper');
  });

  scissorBtn.addEventListener('click', function () {
    playRound('scissor');
  });
}

function getComputerChoice() {
  // Randomly returns either Rock, Paper or Scissor.
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  if (!playGame) return;
  const computerSelection = getComputerChoice();

  if (totalRounds >= 5) {
    playGame = false;
    disableButtons();
    return;
  }
  // Plays a single round of Rock, Paper, Scissor.
  if (computerSelection === playerSelection) {
    result.textContent = "It's a TIE";
    console.log("It's a TIE!");
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissor') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissor' && playerSelection === 'paper')
  ) {
    console.log('Computer Wins!');
    result.textContent = 'Computer Wins!';
    computerScore += 1;
  } else {
    console.log('Player Wins!');
    result.textContent = 'Player Wins!';
    playerScore += 1;
  }
  totalRounds++;
  displayScores.innerHTML = `<p> Player: ${playerScore} </p> <p>Computer: ${computerScore}</p>`;
  displayRounds.textContent = `Round : ${totalRounds}`;
  checkGameStaus();
}

resetGame.addEventListener('click', function () {
  playerScore = 0;
  computerScore = 0;
  totalRounds = 0;
  playGame = true;
  for (let btn of playBtn) {
    btn.disabled = false;
  }
  displayRounds.textContent = `Round : ${totalRounds}`;
  displayScores.innerHTML = `<p> Player: ${playerScore} </p> <p>Computer: ${computerScore}</p>`;
  result.textContent = '';
  resetGame.className = 'button is-info is-fullwidth resetGame';
});
