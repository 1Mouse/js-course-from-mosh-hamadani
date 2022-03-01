let nums=[1,2,3,4];
let another=nums;

//run every method alone to avoid conflicts

//method 1
nums=[];
console.table(nums); //empty
console.table(another); //has the main value
// "another" pointed to the address of nums and took all its values as a copy
// we emptied nums but not its copy

//method 2
nums.length=0;
console.table(nums); //empty
console.table(another); //empty
//this method empties all the array references

//method 3
nums.splice(0,nums.length);
console.table(nums); //empty
console.table(another); //empty
//this method empties all the array references