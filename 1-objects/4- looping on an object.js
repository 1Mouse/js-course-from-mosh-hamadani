const circle = {
    radius: 1,
    draw() {
        console.log("drawing");
    }
};

for (let circleKey in circle) {
    if (typeof circle[circleKey] != 'function') //to exclude methods
        console.log(circleKey, circle[circleKey]);
}
console.log("------------------------------------------");

for (const circleKey of Object.keys(circle)) {
    console.log(circleKey);
}
console.log("------------------------------------------");

for (const circleEntries of Object.entries(circle)) {
    console.log(circleEntries);
}

if ("color" in circle) //the in operator
    console.log("yes");
else
    console.log("no");