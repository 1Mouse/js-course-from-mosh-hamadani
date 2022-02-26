let str1="alo"; //string primitive
let str2=new String("alo object"); //string object "wrapping a primitive into object",
                                        // this doesn't change the fact that it's a primitive

console.log(typeof str1);
console.log(typeof str2);

function f(str) { //string primitives and string Object are both passed by value
    str="modified";
}

f(str1);
f(str2);

console.log(str1);
console.log(str2);

console.log(typeof str1);
console.log(typeof str2);