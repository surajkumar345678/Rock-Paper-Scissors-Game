var playerScore = 0;
var computerScore = 0;
var tieCount = 0;
var totalCount = 0;

function playGame(playerChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  var result = '';

  if (playerChoice === computerChoice) {
    result = 'It\'s a tie!';
    tieCount++;
    celebrate();
    changeBackgroundColor('#3498db'); // Blue for tie
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win! 😄';
    playerScore++;
    celebrate();
    changeBackgroundColor('#2ecc71'); // Green for win
  } else {
    result = 'You lose! 😢';
    computerScore++;
    celebrate();
    changeBackgroundColor('#e74c3c'); // Red for lose
  }

  totalCount++;
  updateScore(result);
}

function celebrate() {
  document.getElementById('result').classList.add('celebration', 'pulsate');
  setTimeout(() => {
    document.getElementById('result').classList.remove('celebration', 'pulsate');
  }, 1000);
}

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  setTimeout(() => {
    document.body.style.backgroundColor = '#f5f5f5'; // Reset to default
  }, 1000);
}

function updateScore(result) {
  document.getElementById('result').innerHTML = result;
  document.getElementById('score').innerHTML = `Player: ${playerScore}, Computer: ${computerScore}, Ties: ${tieCount}, Total Moves: ${totalCount}`;
}
