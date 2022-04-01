class Circle {
    constructor(radius) {
        this.radius=radius;
    }
    // Instance method
    draw(){
        console.log("drawing...");
    }
    // Static method
    static parse(str){
        const radius=JSON.parse(str).radius;
        return new Circle(radius);
    }
}

let circle=Circle.parse('{ "radius": 1 }');
console.log(circle); // check circle in dev tools.
