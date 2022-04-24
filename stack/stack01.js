// Stack
// LIFO -> Last in first out
// Último elemento a ser inserido, será o primeiro a ser retirado

//Exemple:

var letters = []

var word = 'Computer'

var word2 = ''

// put letters of word into stack

for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
    console.log('Letters array in the first experiment' + letters)
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    word2 += letters.pop()
    console.log('Letters array in the second experiment' + letters)
}
