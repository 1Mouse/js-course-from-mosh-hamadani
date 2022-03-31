function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Shape() {
    this.draw = function () { // this method won't be inherited as it's on the instance not the prototype
        console.log("drawn");
    };
}

Shape.prototype.duplicate = function () {
    console.log("duplicate shape");
};

function Circle() {

}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    console.log("duplicate circle");
};

shapes=[new Circle(),new Shape()];

for (let shape  of shapes) {
    shape.duplicate(); // POLYMORPHISM
}