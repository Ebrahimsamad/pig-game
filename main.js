'use strict';

// start functions compliment
const switching = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // important before he transform to the next player we reset the text content to zero to start calculating from the begging
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // `current${activePlayer}El`.style.backgroundColor('#c7365f');
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
};
// end functions compliment

// start selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// end selecting elements

// start  starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// end starting condition
let playing = true;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// start Rolling button
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1-  Generating A Random Rolling Dice
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    // 2-  Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3-  checking for rolled 1
    if (dice !== 1) {
      //display it in the content
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // change later
    } else {
      //swith to the next player
      switching();
    }
  }
});
// End Rolling button
//   Start Holding Button
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1- adding current score to total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2- check if the player's score >= 100
    if (scores[activePlayer] >= 20) {
      //   finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
    } else {
      // switch the player
      switching();
    }
  }
});
//   End Holding Button
// start reset button
btnNew.addEventListener('click', function () {
  init();
});
// end reset button
