// FUNÇÕES

//sem retorno
function imprimirSoma(a, b) {
   console.log(a + b)
}

imprimirSoma(2, 3)

// com retorno
// por default o valor é 0 quando nenhum valor é passado p/ b
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2,3))

