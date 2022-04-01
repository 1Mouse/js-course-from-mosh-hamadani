const _radius=Symbol("private radius");
const _draw=Symbol("private draw");

class Circle {
    constructor(radius) {
        this[_radius]=radius; //private property
    }

    [_draw](){ //this method is on the prototype of Circle which is Object Base
        console.log(this,'drawing...'); //this refers to the Circle object
    }
}

const c=new Circle(5);
console.log(c);
console.log(Object.getOwnPropertyNames(c)); // []
console.log(Object.getOwnPropertyDescriptor(c,_radius));
console.log(Object.getOwnPropertySymbols(c)); // [Symbol(private radius)]

// only way to access a private property is
let symbols=Object.getOwnPropertySymbols(c);
console.log(c[symbols[0]]);

// only way to access a private Method is
let symbolMethods=Object.getOwnPropertySymbols(Object.getPrototypeOf(c));
console.log(c[symbolMethods[0]]);

