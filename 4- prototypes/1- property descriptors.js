//debug is browser it's better

// function Person(name) {
//     this.name=name;
// }
let person ={name:"Messi"}; //Prototype: object
// let person=new Person("Messi"); //Prototype: Person -> Object "multi-level inheritance"
let objectBase=Object.getPrototypeOf(person);
console.log(objectBase);

let descriptor=Object.getOwnPropertyDescriptor(objectBase,'toString');
console.log(descriptor);

console.log(Object.getOwnPropertyDescriptor(person,'name'));


Object.defineProperty(person,'name',{ //they are all true by default
    writable: false,
    configurable:true, //to enable or disable deletion
    enumerable:true
});
person.name='haha'; // will not affect because we disabled writing
console.log(person);
