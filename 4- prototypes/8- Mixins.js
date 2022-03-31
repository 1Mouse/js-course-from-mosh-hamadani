const canEat = {
    eat: function () {
        //this.hunger--;
        console.log("eating...");
    }
};

const canWalk = {
    walk: function () {
        console.log("walking...");
    }
};

const canSwim = {
    swim: function () {
        console.log("swimming...");
    }
};

function Person() {

}

const dog = Object.assign({}, canWalk, canEat);
console.log(dog);

Object.assign(Person.prototype, canWalk, canEat);
let person = new Person();
console.log(person);

// for better readability, mixin is also called Composition
function mixin(target, ...sources) { // rest operator
Object.assign(target,...sources); // spread operator
}

function GoldFish(){

}
mixin(GoldFish.prototype,canSwim,canEat);
let goldFish=new GoldFish();
console.log(goldFish);