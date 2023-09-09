
// DOM Elements
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const durationInputField = document.querySelector('#duration')
const circleElmt = document.querySelector("circle")
const radius = circleElmt.getAttribute('r')
let perimeter = radius * 2 * Math.PI

// setting the stroke-dasharray to be equal to perimeter
circleElmt.setAttribute('stroke-dasharray', perimeter);
let duration;

// onStart, onTick and onComplete are callback functions for usage inside of our Timer class.  
// Here, we note that the Timer has a start function and then the border has a start function and these
// callbacks are how we communicate between the two objects. 

const timer = new Timer(
    durationInputField,
    startButton,
    pauseButton,
    {
        onStart(totalDuration) {
            duration = totalDuration;
            console.log("Timer has started..")

        },

        onTick(timeRemaining) {
            const offset = perimeter * timeRemaining / (duration * 60) - perimeter;
            console.log(offset)
            circleElmt.setAttribute('stroke-dashoffset', offset);
            circleElmt.style.transition = 'stroke-dashoffset 1s linear'; // add transition effect
        },

        onComplete() {
            console.log("Timer is done counting down!")

        }
    }
)