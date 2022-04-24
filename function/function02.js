// Armazenando uma funcao em uma variável
const imprimirSoma = function(a, b) {
       console.log(a+b)
}
imprimirSoma(2, 3)

// Armazenando uma arrow function em uma variável
// "=>" substitui "function"
const soma = (a, b) => { 
    return a + b
}
console.log(soma(6,6))

// Retorno implícito
// Sem chaves só executa uma sentença de código
const subtracao = (a, b) => a - b

console.log(subtracao(2,2))

