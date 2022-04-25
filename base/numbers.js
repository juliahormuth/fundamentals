let num1 = 1
let num2 = 2.5

num1 = num1.toString()
console.log(typeof num1)

// To Binary
let myDate = 2000
console.log(myDate.toString(2))

// Formate the money
let number = 10.5789
console.log(number.toFixed(2))
console.log(number.toFixed(4))


// Is the number Integer?
console.log(Number.isInteger(number)) // true or false
// Is NaN?
let temp = number * 'julia'
console.log(Number.isNaN(temp))