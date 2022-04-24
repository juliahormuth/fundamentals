//  Filter
// does a filter and returns only the values ​​that contain that filter

// easy example

const grades = [7.1, 6.2, 5.4, 9.0, 8.8, 10.0]

function getGreenGrades(grade) {
    return grade >= 7
}

const greenGrades = grades.filter(getGreenGrades)

console.log(greenGrades)