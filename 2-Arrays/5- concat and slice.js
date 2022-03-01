const first=[{id:99},2,3]
const  second=[4,5,6]
const combined=first.concat(second);
console.log(combined)

//first[0].id=1000;        //uncomment and see what happens
//first[2]=666             //uncomment and see what happens
const slice=combined.slice(); //try slice(3) and slice(2,4)

console.log(slice)

//be careful if first is an array of objects, they are copied by reference
// any change in combined or slice will affect the first array


