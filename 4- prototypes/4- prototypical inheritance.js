// see prototypes tree in browser "better"

function Shape(){

}
Shape.prototype.duplicate=function (){
    console.log("duplicate shape");
}

function Circle(radius){
    this.radius=radius;
}
Circle.prototype.draw=function (){
    console.log("draw circle");
};

Circle.prototype=Object.create(Object.prototype); // this is the default that happens
                                                  // internally as every object inherits
                                                  //from Object base by default
Circle.prototype=Object.create(Shape.prototype); // we change the prototype of Circle to be
                                                 // shape which also inherits from Object base
                                                 // the father of all objects
// as a best practice when you change the prototype of an object also reset the constructor
Circle.prototype.constructor=Circle;


let s=new Shape();
let c=new Circle(5);
c.duplicate(); // no error as we changed the prototype to shape, so we can access its members

