class Shape {
    move() {
        console.log('shape move');
    }
}

class Circle extends Shape {
    move() {           // overrides the move method in the parent class
        super.move(); // to call the method from the super class if needed
        console.log('circle move');
    }
}

let c = new Circle();
c.move();

