'use strict'; // to disable referring "this" to the global Window object

const Circle= function(){
    this.draw=function () {
        console.log(this);
    };
};

const c=new Circle();

// method call
c.draw(); //this refers to the Circle object

const draw=c.draw;
// const draw=c.draw(); // for some reason this will make the "this" refer to the Circle object !!

// function call
draw(); //this refers to the global Window object, in case of use strict it refers to undefined