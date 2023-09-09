'use strict'

// Starting conditions
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const playerOneScoreEl = document.querySelector("#score--0");
const playerOneCurrentScore = document.getElementById("current--0")
const playerTwoScoreEl = document.querySelector("#score--1");
const playerTowCurrentScore = document.getElementById("current--1")

const diceImg = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const newGameBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");

function resetScores() {
    playerOneScoreEl.textContent = 0;
    playerTwoScoreEl.textContent = 0;
    diceImg.classList.add("hidden")
}
resetScores();


// show image for the dice rolled
function showDiceImg(e) {
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${e}.png`;
}

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
rollDiceBtn.addEventListener('click', function () {
    const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
    if (playing) {
        if (randomDiceRoll != 1) {
            showDiceImg(randomDiceRoll);
            currentScore += randomDiceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            switchPlayer();
        };
    }
});

holdBtn.addEventListener('click', function () {
    if (playing) {
        // 1. add current score to score of active player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            diceImg.classList.add("hidden");
        } else {
            switchPlayer();

        }
    }

});


newGameBtn.addEventListener('click', function () {


});