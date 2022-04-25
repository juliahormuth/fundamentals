// Array
const alunos = ['Julia', 'Daniel', 'Felipe']

alunos[alunos.length] = 'Pedro'
alunos[alunos.length] = 'João'

console.log(alunos)

// OR

alunos.push('Otávio') // adiciona no fim

console.log(alunos)

// PARA ADICIONAR NO COMEÇO

alunos.unshift('Luísa')
alunos.unshift('Márcia') // Acaba ficando no índice [0]
console.log(alunos)

// Remover elementos do fim do array
// Pode-se salver o valor removido em uma variável
const removed = alunos.pop()
console.log(alunos)
console.log(removed)

// Remove do começo do array
// Pode-se salvar o valor removido em uma váriavel

const removedWithShift = alunos.shift()
console.log(removedWithShift)
console.log(alunos)

// É array?
console.log(alunos instanceof Array)
