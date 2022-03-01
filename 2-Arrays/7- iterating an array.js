const nums=[200,999,770]

for (let num of nums) {
    console.log(num)
}

nums.forEach(num=>console.log(num));

nums.forEach((num,index)=>console.log(index,num));

for (let index in nums) {
    console.log(index,nums[index])
}