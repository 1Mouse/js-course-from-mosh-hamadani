const circle={
    radius:1,
    draw(){
        console.log("drawing");
    }
};

for (let circleKey in circle) {
    console.log(circleKey);
}
console.log("------------------------------------------");

for (const circleKey of Object.keys(circle)) {
    console.log(circleKey);
}
console.log("------------------------------------------");

for (const circleEntries of Object.entries(circle)) {
    console.log(circleEntries);
}