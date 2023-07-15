'use strict';

// console.log(document.querySelector('.message').textContent);

// // document.querySelector('.message').setAttribute('Messahe');

// document.querySelector('.message').textContent = 'Congrast...';

// const messagePrint = function () {
// if (guessvalue > randNumber) {
//   document.querySelector('.message').textContent = 'Too High...';
// } else if (guessvalue < randNumber) {
//   document.querySelector('.message').textContent = 'Too Low...';
// } else {
//   document.querySelector('.message').textContent = 'Congrast Got the Number';
// }
// };

// document.querySelector('.highscore').textContent = highscore;

let randNumber;
let score;
let highscore = 0;

randNumber = Math.trunc(Math.random() * 20) + 1;
score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guessvalue = document.querySelector('.guess').value;
  if (guessvalue > randNumber) {
    document.querySelector('.message').textContent = 'Too High...';
    score = score - 1;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.score').textContent = score;
    }
  } else if (guessvalue < randNumber) {
    document.querySelector('.message').textContent = 'Too Low...';
    score = score - 1;
    console.log(score + ` outside`);
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.score').textContent = score;
      console.log(score + ` inside`);
    }
  } else if (!guessvalue) {
    document.querySelector('.message').textContent =
      'Please enter any value...';
  } else {
    document.querySelector('.message').textContent = `Congrast...`;
    document.querySelector('.number').textContent = randNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 0;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('body').style.backgroundColor = '#222';
  randNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});
