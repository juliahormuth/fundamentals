let i = 0

//Executes while condition is true like the "for"
while (i <=10) {
    console.log(i)
    i++
}

console.log('###########')

function random(min, max) {
    const r = Math.random() * (max-min) + min 
    return Math.floor(r)
}

const min = 1
const max = 50

let rand = 10

// WHILE -> first check the condition and then execute
while(rand !== 10) {
    rand = random(min,max)
    console.log(rand)
}

console.log('###########')

// DO WHILE -> executes and then check the condition to terminate
do {
rand = random(min,max)
console.log(rand)
} while(rand !== 10)
