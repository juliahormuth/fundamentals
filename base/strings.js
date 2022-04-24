let umaString = "Um texto"

console.log(umaString[0])
console.log(umaString.charAt(0)) // return de value of the position

console.log(umaString.concat(' para um exemplo'))
console.log(umaString + ' para um exemplo')
console.log(`${umaString} para um exemplo`)

console.log(umaString.indexOf('m'))

//Replace values
console.log(umaString.replace('Um', 'Texto'))

// With regex

console.log(umaString.search(/x/))

let me = 'julia'

console.log(me.charAt(4)) // Return the value in the index
console.log(me.length) // Returns the length of a String object


// ##### SLICE #####
//             0123456789  
let address = 'Av. Teste da Silva, n.50 0740812 São Paulo'

let sliceOne = address.slice(25, 32)
console.log(sliceOne)

// ##### SPLIT #####
let addressTwo = 'Av. Teste da Silva, n.50 0740812 São Paulo'
let spliced = addressTwo.split(' ')
console.log(spliced)

let resultSpliced = spliced[0] + spliced[1] + spliced[2] + spliced[3] + spliced[4] + spliced[6] + spliced[7] + spliced[5]

console.log(resultSpliced)

// ### To UpperCase or to LowerCase ###

let uper = 'Julia'
let lower = 'Julia'

console.log(uper.toLocaleUpperCase())
console.log(lower.toLocaleLowerCase())