// initialize the 2D array to a value of false for all vertices
// as by default the array contains undefined values, and
// we can't check an if condition for undefined values

//5 rows by 4 columns
let visited = new Array(5).fill(false).map(() => new Array(4).fill(false));
console.log(visited);
console.log(visited.length); // rows
console.log(visited[0].length); // columns

console.log("==========================================================================================================");


//es6
visited=[...Array(5)].map(x=>Array(4).fill(0))
console.log(visited);
console.log(visited.length); // rows
console.log(visited[0].length); // columns

console.log("==========================================================================================================");


visited=[...Array(5)].map(x=>Array(4))
console.log(visited);
console.log(visited.length); // rows
console.log(visited[0].length); // columns
console.log(visited[3][2]); //undefined

console.log("==========================================================================================================");
