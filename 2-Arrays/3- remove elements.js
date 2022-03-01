let numbers=[1,2,3,4];
//we can delete by three ways

//end
const last=numbers.pop();
console.log(last);

//beginning
numbers=[1,2,3,4];
const first=numbers.shift();
console.log(first);

//middle or delete multiple values
numbers=[1,2,3,4];
numbers.splice(2,1);
console.log(numbers);
