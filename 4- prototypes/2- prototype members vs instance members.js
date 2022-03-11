function Circle(radius){
    //instance member
    this.radius=radius;

    this.move=function(){
        this.draw(); //u can call prototype members inside normally
        console.log("Circle has moved");
    }
}

//adding methods to the prototype is better to save memory space
//prototype member
Circle.prototype.draw=function () {
    console.log("Circle has been drawn");
}


// Circle.prototype.move=function () {
//     this.draw();
//     console.log("Circle has moved");
// }


// Overriding methods in object base
Circle.prototype.toString=function(){
    return `Circle of a radius ${this.radius}`;
}

let c1=new Circle(5);
let c2=new Circle(19);

console.log(Object.keys(c1)); //iterates over instance members only

for (let key in c1) {//iterates over instance members and prototype members
    console.log(key);
}

// instance property is also called own property
console.log(c1.hasOwnProperty('radius'));//true
console.log(c1.hasOwnProperty('draw'));//false