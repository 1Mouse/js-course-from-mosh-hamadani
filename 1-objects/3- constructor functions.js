function Circle(radius,centerX,centerY) {
    this.radius=radius;
    this.location={x:centerX,y:centerY};
    this.draw=function () {
        console.log(`${centerX}, ${centerY}`);
    };
}

const circle1=new Circle(1,4,9);
console.log(circle1);
circle1.draw();

console.log(circle1.constructor); // output: the Circle custom constructor
console.log(Circle.constructor);  // output: the Function built in constructor as functions are also objects