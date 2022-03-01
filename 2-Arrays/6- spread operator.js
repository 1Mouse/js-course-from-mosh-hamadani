const first = [{id: 99}, 2, 3]
const second = [4, 5, 6]

const combined = [...first, 'in between', ...second, "at last"]
console.log(combined)

const copy = [...combined]
console.log(copy)
