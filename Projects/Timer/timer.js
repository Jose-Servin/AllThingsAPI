class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }


        // EventListeners
        // When the start button is clicked, run the start function.  
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause)

    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }

        const intervalDuration = 1000; // update every second
        const totalTime = this.timeRemaining * 60 * 1000; // convert minutes to milliseconds
        let timePassed = 0;

        this.interval = setInterval(() => {
            timePassed += intervalDuration;
            const timeRemaining = (totalTime - timePassed) / 1000; // convert back to seconds
            if (timeRemaining >= 0) {
                this.onTick(timeRemaining);
                this.timeRemaining = timeRemaining / 60; // convert back to minutes
            } else {
                this.pause();
                if (this.onComplete) {
                    this.onComplete();
                }
            }
        }, intervalDuration);
    }

    pause = () => {
        clearInterval(this.interval)

    }

    onDurationChange = () => {

    }

    tick = () => {

        if (this.timeRemaining > 0) {
            // DOM centric approach
            // here we calling both the getter and setter functions in one line 
            this.timeRemaining = this.timeRemaining - 1;

            if (this.onTick) {
                this.onTick(this.timeRemaining)
            }

            // this.timeRemaining invoked the getter method
            // this.timeRemaining = invokes the setter method and t is everything to the right of =
        } else {
            // When the timer reaches 0; clear the interval and run the onComplete callback to emit signal 
            this.pause()
            if (this.onComplete) {
                this.onComplete()
            }
        }
    }

    // getter to retrieve data from DOM 
    // getter gets called like an instance variable so confusion as to where it comes from is "hidden"
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(t) {
        const minutes = Math.floor(t);
        const seconds = Math.round((t - minutes) * 60);
        this.durationInput.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    }

}


