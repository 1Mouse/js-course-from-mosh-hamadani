const _privateProps = new WeakMap();

class Circle {
    constructor(radius) {
        _privateProps.set(this, {
            radius: radius,
            move: () => {
                console.log('moving', this); // here this references the Object that called
                                             // the constructor "Circle" because of the arrow function
            }
        });
    }

    draw() {
        _privateProps.get(this).move();
        console.log('drawing...');
    }
}

const c = new Circle(5);



