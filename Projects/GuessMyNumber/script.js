'use strict';

// defining secret number outside our event listener
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const secretNumber = getRandomIntInclusive(1, 20);
console.log(secretNumber)
document.querySelector(".number").textContent = secretNumber;

// Create a variable for data to not rely on DOM
// This application data is a part of the state application
let score = 20;

// The function inside of our eventListener is only executed
// when the specified event occurs.
document.querySelector(".check").addEventListener(
    'click',
    function () {
        // Capture guess from User
        const guess = Number(document.querySelector(".guess").value);

        // First condition checked: no number submitted by user
        if (!guess) {
            document.querySelector(".message").textContent = "⛔️ No Number!"
        } else if (guess === secretNumber) {
            document.querySelector(".message").textContent = "🎉 Correct Number!"
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "📈 Too High!";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "You lost the game! 🥴";
                document.querySelector(".score").textContent = 0;
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "📉 Too Low!"
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "You lost the game! 🥴";
                document.querySelector(".score").textContent = 0;
            }
        }
    }
)