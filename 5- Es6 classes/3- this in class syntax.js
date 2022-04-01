class Holla {
    yell(){
        console.log(this);
    }
}

let h=new Holla();

// method call
h.yell(); // this refers to Holla Object

let yell=h.yell;

// function call
yell(); // this refers to undefined as classes use strict mode by default
