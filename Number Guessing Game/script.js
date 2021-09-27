'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);

let score = 10;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When input is less than 0 or Empty
  if (!guess || guess < 0) {
    document.querySelector('.message').textContent =
      ' No Number or Invalid Number🏴';

    // When input is correct
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number ✔ 🏆';

    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to bottom right, green, lightblue)';
    document.querySelector('.number').style.width = '400px';

    document.querySelector('.headingtop').textContent = 'Thank You For Playing';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When input is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < randomNumber ? '🔻 Too Low 🔻' : '🔺 Too High 🔺';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundImage = 'none';
      document.querySelector('body').style.backgroundColor = 'black';
    }
  }
});

// for again button
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to bottom right,rgb(224, 68, 68),rgb(226, 226, 68))';
  document.querySelector('.number').style.width = '15rem';
});
