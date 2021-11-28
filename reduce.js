const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function add(a, b) {
    return a + b
}

const result = numbers.reduce(add)

console.log(result)