// const data = new Date(0)

// console.log(data.toString())


const date = new Date()
const dateBrazil = formatedDate(date)
console.log(dateBrazil)


function formatedDate(date) {
    const day = zeroLeft(date.getDate())
    const mounth = zeroLeft(date.getMonth() + 1)
    const year = zeroLeft(date.getFullYear())
    const hour = zeroLeft(date.getHours())
    const min = zeroLeft(date.getMinutes())
    const seg = zeroLeft(date.getSeconds())

    return `${day}/${mounth}/${year} ${hour}:${min}:${seg}
    `
}

function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`
}

