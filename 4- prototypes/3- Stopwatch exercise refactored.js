// not working bullshit -> premature optimization is the root of evil

// we will use prototype members to practise it, even though it's not needed
// in a stopwatch class because there would always be one instance of it

function StopWatch() {
    // a practise to make public readonly members
    // as with now they are not visible to an outer prototype method
    let startingTime;
    let isCurrentlyWorking = false;
    let duration = 0;

    Object.defineProperty(this, 'startingTime', {
        get() {
            return startingTime;
        },
        set(value){
            startingTime=value
        }
    });
    Object.defineProperties(this, {
        'isCurrentlyWorking': {
            get() {
                return isCurrentlyWorking;
            },
            set(value) {// to set them outside the function scope in prototype
                isCurrentlyWorking=value;
            }
        },
        'duration': {
            get() {
                try {
                    if (isCurrentlyWorking)
                        throw  new Error("Pls, Stop the stopwatch first");
                    else
                        return `${duration / 1000} seconds`;
                } catch (e) {
                    console.log(e);
                }
            },
            set(value){
                duration=value;
            }
        }
    });

}

StopWatch.prototype.start = function () {
    try {
        if (this.isCurrentlyWorking === false) {
            this.staringTime = new Date;
            this.isCurrentlyWorking = true;
        } else {
            throw new Error("Stopwatch has already started.");
        }
    } catch (e) {
        console.error(e);
    }
}

StopWatch.prototype.stop=function () {
    try {
        if (this.isCurrentlyWorking === false)
            throw new Error("Stopwatch hasn't started, yet.")
        else {
            this.duration += ((new Date) - this.startingTime);
            this.isCurrentlyWorking = false;
        }
    } catch (e) {
        console.error(e);
    }
}

StopWatch.prototype.reset= function () {
    this.isCurrentlyWorking = false;
    this.startingTime = undefined;
    this.duration = 0;
}

// test it in the browser, It's better than that.
let myStopWatch = new StopWatch();
myStopWatch.start();
for (let i = 0; i < 1000000000; i++) {
    let x = 0;
    x += 1;
}
//myStopWatch.duration=5;
myStopWatch.stop();
console.log(myStopWatch.duration);