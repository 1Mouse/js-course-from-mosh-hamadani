// see prototypes tree in browser "better"

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log("duplicate shape");
}

function Circle(radius,color) {
    //wrong way
    //Shape(color); // here color='red' will be added to the window object

    //right way
    Shape.call(this,color); // to reference the 'this' in this context
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log("draw circle");
};

Circle.prototype = Object.create(Object.prototype);
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


let s = new Shape();
let c = new Circle(5,'red');

