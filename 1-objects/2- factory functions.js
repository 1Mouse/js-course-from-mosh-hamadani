function createCircle(radius,x,y){
    return {
        radius,
        location:{
            x,
            y
        },
        draw(){
            console.log(`${x}, ${y}`);
        }
    };
}

const circle1=createCircle(1,4,9);
console.log(circle1);
circle1.draw();

console.log(circle1.constructor); // output: the internal js Object constructor