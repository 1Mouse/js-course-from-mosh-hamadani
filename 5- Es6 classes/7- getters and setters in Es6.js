const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius); //so use this approach to make all method private by default
                                   // and control their privacy by adding getters and setters
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0)
            throw new Error('Invalid radius');

        _radius.set(this, value);
    }
}