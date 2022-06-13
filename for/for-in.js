const fruits = ['litter', 'pear', 'grape']


for (let i in fruits) {
console.log(fruits[i])
}


const person = {
    name: 'Julia',
    surname: 'Hormuth',
    age: 22
}

for(let i in person) {
    console.log(person[i]) // content
    console.log(i, person[i]) // content and key
}

console.log(person.name)
console.log(person['name'])