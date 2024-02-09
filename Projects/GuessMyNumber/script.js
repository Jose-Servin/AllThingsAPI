'use strict';

// defining secret number outside our event listener
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let secretNumber = getRandomIntInclusive(1, 20);
console.log(secretNumber)

// Create a variable for data to not rely on DOM
// This application data is a part of the state application
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

// The function inside of our eventListener is only executed
// when the specified event occurs.
document.querySelector(".check").addEventListener(
    'click',
    function () {
        // Capture guess from User
        const guess = Number(document.querySelector(".guess").value);

        // First condition checked: no number submitted by user
        if (!guess) {
            displayMessage("⛔️ No Number!");
        } else if (guess === secretNumber) {
            displayMessage("🎉 Correct Number!");
            document.body.style.backgroundColor = "#60b347";
            var numberDiv = document.querySelector('.number');
            if (numberDiv) {
                numberDiv.style.width = "30rem";
            }
            document.querySelector(".number").textContent = secretNumber;
            if (score > highScore) {
                // only when we win and only if the score > highScore do we update highScore
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }
        } else if (guess !== secretNumber) {
            if (score > 1) {
                // Here, the only thing that changes is the message to our User
                displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                displayMessage("You lost the game! 🥴");
                document.querySelector(".score").textContent = 0;
            }
        }
    }
)


// Again button reset functionality
document.querySelector('.btn.again').addEventListener(
    "click",
    function () {
        // re-assign secret number
        secretNumber = getRandomIntInclusive(1, 20);
        console.log(`New secretNumber = ${secretNumber}`)
        // re-assign score
        score = 20;
        document.querySelector(".score").textContent = score;
        // Reset input that takes in guess
        document.querySelector(".guess").value = "";
        // Reset message
        displayMessage("Start guessing...");
        // Reset background color
        document.body.style.backgroundColor = "#222";
        // Reset secretNumber div width and text content
        var numberDiv = document.querySelector('.number');
        if (numberDiv) {
            numberDiv.style.width = "15rem";
            numberDiv.textContent = "?"
        }

    }
)