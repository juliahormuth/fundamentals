const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// take the rest
const [one, two, three, ...rest] = numbers

console.log(rest)

const newNumbers = [1, 2, 3, 4, 5, 6, 7]

//skip the numbers when you want
const [um, , tres, , cinco] = newNumbers

console.log(um, tres, cinco) //1,3,5 

const newArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const test = newArray[1][2]

console.log(newArray[1][1]) // 5

console.log('Set to new variable ' + test)

const newArray2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const [, [, , six]] = newArray2 // Just 6

console.log(six) //6

const [list1, list2, list3] = newArray2

console.log(list3[2]) //9