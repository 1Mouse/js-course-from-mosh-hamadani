const nums = [9, 2, 2, 5];
nums.sort();  //default is ascending
console.log(nums);

nums.reverse();
console.log(nums);

// to sort reference types
const courses = [
    {id: 99, name: 'node.js'},
    {id: 888, name: 'React.js'}
];

courses.sort((a, b) => { //ascending
    // a<b --> return -1
    // a>b --> return 1
    // a==b --> return 0

    //string comparison ignores cases so to sort right we convert both to upper or lower
    if (a.name.toUpperCase() < b.name.toUpperCase())
        return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase())
        return 1;
    return 0;
});

console.log(courses);