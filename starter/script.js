'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!🎉';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

//math.random gives no between 0 to 1 and trunc removes the extra part after decimal*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number😒';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉🍷';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'yellowgreen';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too High🤔📈';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lose!😕';
        document.querySelector('.score').textContent = 0;
      }
    } else {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too Low🤔📉';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lose!😕';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
