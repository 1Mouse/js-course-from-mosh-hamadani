class Shape{
    constructor(color) {
        this.color=color;
    }
    move(){
        console.log('move');
    }
}

class Circle extends Shape{ // no need to manually edit the constructor
                            // or the prototype like in earlier es editions
    constructor(color,radius){
        super(color); // MUST call the parent class constructor by the super keyword
        this.radius=radius;
    }

    draw(){
        console.log('draw');
    }
}

let c=new Circle('red',5);