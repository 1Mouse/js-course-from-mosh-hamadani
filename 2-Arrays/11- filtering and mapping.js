const nums = [1, 2, 3, -1]

const filtered = nums.filter(num => num > 0)
console.log(filtered)

// map to strings
const items=filtered.map(value=>'<li>'+value+'</li>')
const html='<ul>\n'+items.join("\n")+'\n</ul>'
console.log(html)

//  map to objects
const objects=filtered.map(value => {
    return { id:value}
})
/*
const objects=filtered.map(value => { id:value}) //wrong as the js engine in the arrow syntax
                                                 //cannot decide if {} are to create an object and return it
                                                 //or to include the body of the arrow syntax

 */

//const objects=filtered.map(value => ({ id:value}))       // valid as we added () around the object

// map and filter can be chained
console.log(objects)