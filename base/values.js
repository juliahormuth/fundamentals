/*
Primitivos (imutáveis) -> string, number, boolean,
 undefined, null (bigint, symbool) = Valores copiados


 Referência (mutável) - array, object, function  -> passados por referência
 Apontam para o mesmo lugar na memória
 */

//Examplo array

let a = [1, 2, 3]
let b = a

console.log(a, b)

a.push(4)
//Ambos são afetados pois apontam p mesmo lugar na memória
console.log(a, b)

// Por padrão, fazem uma referência ao local da memória
//Para copiar o valor sem apontar p mesmo lugar, basta:

let c = [1, 2, 3]
let d = [...c]

c.push(4)
console.log(c, d)


//Mesmo examplo com objeto

let e = {
    name: 'julia',
    age: 22
}

let f = { ...e }

e.name = 'daniel'
console.log(e, f)

// Já com valores primitivos, cria-se apenas uma cópia
// Sem apontar para o local da memória

let g = 'Hallo, ich spreche Deutsch'
let h = g

g = 'Hi, i speak English'

console.log(g, h)