// const a = [1, 2]
// const b = a

// b.push(3)

// console.log(a, b)

// alocaded in the same memory local


let a = 2
const b = a
console.log(a, b) //2,2

a = 3

console.log(a, b) //3,2