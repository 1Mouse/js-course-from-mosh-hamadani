console.log(sum([1, 2, 3]));
console.log("------------------------------------------");
console.log(sum(1, 2, 3));

function sum(...items) { //this function will behave wrongly with an array as input
    //console.log(items); //items in case of passing an array is an array that has only
                          //one element that element is the passed array so the reduce
                          //method works wrongly
    return items.reduce((a, b) => a + b);
}

function sumModified(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}

console.log("-------------------------------------------");
console.log(sumModified([1,2,3]));
console.log(sumModified(1,2,3));