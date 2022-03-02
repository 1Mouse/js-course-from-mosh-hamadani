const nums = [1, 2, 3,-1]

const allPositive = nums.every(num => num >= 0)
console.log(allPositive)

const somePositive = nums.some(num => num >= 0)
console.log(somePositive)
