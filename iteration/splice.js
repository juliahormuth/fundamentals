// Splice

// remove an array item from its index

const numbers = [ 1, 2, 3, 4, 5]

const result = numbers.splice(1, 1)

console.log(result)

console.log(numbers)

// you can set the index and the amount of elements you want to delete

const newResult = numbers.splice(0, 3)

console.log(numbers)