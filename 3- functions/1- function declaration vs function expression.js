//function declaration allows Hoisting in js, js engine moves all function declaration to top
//so u can call a function the is down without any errors
//function expressions doesn't allow that, it is treated like a variable

//Arguments
console.log(sumDeclaration(1,2,3,4)); // no error because of hoisting
//console.log(sumExpression(1,2,3,4)); //error
function sumDeclaration(){
    let sum =0;
    for (const argument of arguments) {
        sum+=argument;
    }
    return sum;
}

let sumExpression=function (){
    let sum =0;
    //console.log(arguments); args are an object if we didn't specify them in the declaration
                              // or we didn't use the rest operator
    for (const argument of arguments) {
        sum+=argument;
    }
    return sum;
};

console.log(sumExpression(1,2,3,4));
