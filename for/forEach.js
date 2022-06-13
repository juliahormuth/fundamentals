// ForEach JS function

const names = ['Julia', 'Felipe', 'Daniel']

names.forEach(function(item, i, array) {
    console.log(item, i)
})

console.log('##########')

names.forEach((item, i, array) => {
    console.log(item, i, array)
})