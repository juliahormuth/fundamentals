function getDay(day) {
    let dayString;

    switch (day) {
        case 0:
            dayString = 'Domingo';
            // break;
            return dayString
        case 1:
            dayString = 'Segunda';
            // break;
            return dayString
        case 2:
            dayString = 'Terça';
            // break;
            return dayString
        case 3:
            dayString = 'Quarta';
            // break;
            return dayString
        case 4:
            dayString = 'Quinta';
            // break;
            return dayString
        case 5:
            dayString = 'Sexta';
            // break;
            return dayString
        case 6:
            dayString = 'Sábado';
            // break;
            return dayString
    }
}

const data = new Date('1987-04-26 00:00:00')
let dayOfWeek = data.getDay();

console.log(dayOfWeek)