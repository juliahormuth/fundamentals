let nome = 'julia'

//arguments is the value in the parameter. Example: parameter name and argument julia
function saudacao(nome) {
    const returned = `Olá ${nome}`
    return returned
}

const result = saudacao(nome)
console.log(result)

// OR

const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9))

// Arrow function

const raizCopia = (n) => {
    return n ** 0.5
};

console.log(raizCopia(3))

// OR

const raizz = n => n ** 0.5;
console.log(raizz(10))
