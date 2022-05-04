// MAP //
// Dobre os valores:
const valores = [2, 4, 6, 8, 10, 12]

const dobroValores = valores.map((item) => {
    return item * 2
})
// console.log(dobroValores)

const pessoas = [
    { nome: 'Julia', idade: 22 },
    { nome: 'Daniel', idade: 19 },
    { nome: 'Felipe', idade: 9 }
]

// Para cada elemento:

// Retorne uma string com o nome da pessoa:
const somenteNome = pessoas.map((item, teste, coco) => {
    return item.nome
})
console.log(somenteNome)
//Remova apenas a chave "nome" do objeto
const somenteIdade = pessoas.map((item) => {
    return item.idade
})
console.log(somenteIdade)
// Adicione uma chave id para cada objeto
const ids = pessoas.map((item) => {
    return item.id = Math.random()
})
console.log(ids)