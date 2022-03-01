//array of primitives
const nums = [99, 200, 500, 200];
console.log(nums.indexOf(200)); //return -1 if not found //else returns the first index of 200 if found
console.log(nums.lastIndexOf(200));
console.log(nums.includes(9000));
console.log("----------------------------------------------");

//array of references
const courses = [
    {id: 99, name: 'CS'}, {id: 200, name: 'DataBase'}
];

console.log(courses.indexOf({id: 99, name: 'CS'})); //-1
console.log(courses.includes({id: 99, name: 'CS'})); //-1
console.log("----------------------------------------------");
// we can't use these methods to find a reference type as the passed object has a different address in
// memory, so they are different objects. Instead use find().


//return undefined if not found else return the object.
//takes a function as input called predicate
//u can use the function syntax or the arrow function
//this function is called a callback function
console.log(courses.find(element => element.id === 99 && element.name === 'CS'));


//return -1 if not found else it returns the first index that the element is available at
console.log(courses.findIndex((element) => {
    return element.id === 99 && element.name === 'CS';
}));


//function syntax
console.log(courses.findIndex(function (element) {
    return element.id === 99 && element.name === 'CS';
}));