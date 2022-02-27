const numbers=[3,4];
numbers.push(5,6);
numbers.unshift(1,2); //nushift is slower by 94% than push

console.log(numbers);
console.log("======================================");

numbers.splice(2,0,"a","b");
console.log(numbers);

console.log("======================================");

//benchmark
var a=[];
var start = new Date;
for (var i=0;i<100000;i++) {
    a.unshift(1);
}
var end = (new Date)-start;
console.log(`Unshift time: ${end}`);

var a=[];
var start = new Date;
for (var i=0;i<100000;i++) {
    a.push(1);
}

a.reverse();
var end = (new Date)-start;
console.log(`Push and reverse time: ${end}`);