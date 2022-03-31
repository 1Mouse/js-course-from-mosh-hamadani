function extend(Child,Parent) {
    Child.prototype=Object.create(parent.prototype);
    Child.prototype.constructor=Child;
}
function Shape(){

}
Shape.prototype.duplicate=function (){
    console.log("duplicate shape");
};

function Circle(){

}
extend(Circle,Shape);

//override the duplicate function in shape as by default
// JS finds the function in the child first then in the parent
Circle.prototype.duplicate=function () {
    // in case you want to call the parent function first
    // do this
    //Shape.prototype.duplicate();
    // or you can also use call if the parent function has a 'this'
    Shape.prototype.duplicate.call(this);

    console.log("duplicate circle");
}

let c=new Circle();
