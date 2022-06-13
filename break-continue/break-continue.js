const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let number of numbers) {
if(number === 2) {
    continue 
    //goes back to the beginning of the loop and doesn't execute the rest of the "for" loop
    //jump to the next loop iteration
}

if(number === 7) {
    break
    //when the condition is true, exit the loop
}
console.log(number)
}