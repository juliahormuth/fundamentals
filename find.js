// find
// finds the first value of the array that presents the implemented logic

// different from filter, which would filter all of the same logic

//easy example
const ages = [3, 10, 18, 20, 40, 50];

function checkAge(age) {
  return age > 18;
}

const result = ages.find(checkAge)

console.log(result)