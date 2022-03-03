const nums = [1, 2, 3, -1]
// IMPORTANT LINK!!!!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
let sum=nums.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0)

console.log(sum)