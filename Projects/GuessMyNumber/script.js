'use strict';

// defining secret number outside our event listener 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const random_number = getRandomIntInclusive(1, 20);
console.log(random_number)

document.querySelector(".check").addEventListener(
    'click',
    function () {
        // first console log value of input field 
        const guess = Number(document.querySelector(".guess").value);
        console.log(typeof guess);

        // if no number entered guess is False, so we want this condition to be true to run. 
        // here we separate boolean value vs condition boolean 
        if (!guess) {
            document.querySelector(".message").textContent = "No Number!"
        }

    }
)