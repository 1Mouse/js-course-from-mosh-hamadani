const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        /* _move.set(this, function () {
                    console.log('moving', this); // here this references the global Window Object
                                                 // so undefined as classes run in strict mode by default
                });*/

        // Instead, use the arrow syntax to inherit this
        _move.set(this, () => {
            console.log('moving', this); // here this references the Object that called
                                         // the constructor "Circle"
        });
    }

    draw() {
        _move.get(this)();
        console.log('drawing...');
    }
}

const c = new Circle(5);



