const person = {
// name: 'Julia',
surname: 'Hormuth',
address: {
    street: 'Av. Teste',
    number:  200
}
}


const normal = person.name // undefined or Julia
console.log(normal)


// Attribution by destructuring
const {name = 'Julia', surname} = person
console.log(name, surname)


const {name: newName = 'Hello'} = person

console.log(newName)


const newPerson = {
    nome: 'Julia',
    surname: 'Hormuth',
    address: {
        street: 'Av. Teste',
        number:  200
    }
}

const {nome, ...resto} = person
console.log(resto)

let newPerson2 = {
    vorname: 'Julia',
    familyname: 'Hormuth',
    newAaddress: {
        street: 'Av. Teste',
        number:  200
    }
}

const {newAaddress: {street: s = 'Rua 25 de março', number}} = newPerson2

console.log(s)

   