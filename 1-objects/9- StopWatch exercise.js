function StopWatch() {
    let startingTime;
    let isCurrentlyWorking = false;
    let duration = 0;
    //let duration;
    this.start = function () {
        try {
            if (isCurrentlyWorking === false) {
                startingTime = new Date;
                isCurrentlyWorking = true;
            } else
                throw new Error("Stopwatch has already started.");
        } catch (e) {
            console.log(e);
        }
    }

    this.stop = function () {
        try {
            if (isCurrentlyWorking === false)
                throw new Error("Stopwatch hasn't started, yet.")
            else {
                duration += ((new Date) - startingTime);
                isCurrentlyWorking = false;
            }
        } catch (e) {
            console.log(e);
        }
    }

    Object.defineProperty(this, 'duration', {
        get() {
            try {
                if (isCurrentlyWorking)
                    throw  new Error("Pls, Stop the stopwatch first");
                else
                    return `${duration / 1000} seconds`;
            } catch (e) {
                console.log(e);
            }
        }
    });

    this.reset = function () {
        isCurrentlyWorking = false;
        startingTime = undefined;
        duration = 0;
    }
}

// test it in the browser, It's better than that.
let myStopWatch = new StopWatch();
myStopWatch.start();
for (let i = 0; i < 1000000000; i++) {
    let x = 0;
    x += 1;
}
myStopWatch.stop();
console.log(myStopWatch.duration);