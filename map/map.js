const pessoas = [
    { id: 3, nome: 'Julia' },
    { id: 2, nome: 'Daniel' },
    { id: 1, nome: 'Felipe' },
]

const novasPessoas = {}

for (const pessoa of pessoas) {
    const { id } = pessoas
    novasPessoas[id] = { ...pessoa }
}

console.log(novasPessoas)