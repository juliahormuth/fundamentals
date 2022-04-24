// Map
// takes all elements of an array, transforms them and returns all array values

// easy example

const numbers = [3, 4, 7, 1, 9 , 7]

function double(num) {
    return num * 2
}

const result = numbers.map(double)

console.log(result)