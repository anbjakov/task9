'use strict'

console.log('-------------task 1-----------');

let birthDay = new Date('1995-02-22');
let day = birthDay.getDate();
let month = birthDay.getMonth()+1;
let year = birthDay.getFullYear();
console.log(`${day<10?"0"+day:day}.${month<10?"0"+month:month}.${year}`)

console.log('-------------task 2-----------');

let getDiffDays = (begin,end)=> {
    const  DAY_IN_MILLISECONDS = 86400000;
    let startDate = +new Date(begin);
    let finishDate = +new Date(end);
    if (isNaN(startDate) || isNaN(startDate) ) {
        console.error('Error: invalid date');
        return
    }
    if (startDate > finishDate)  {
        console.error( 'Error: your start date is later than');
        return
    }
    let daysPassed = (finishDate - startDate)/DAY_IN_MILLISECONDS
    return daysPassed
}

console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end

console.log("----------task 3--------------");

let isWeekend = (dateStr)=>{
    let date = new Date(dateStr);
    let inputedDay = date.getDay();
    if (isNaN(+date)) {
        console.error('Error: invalid date');
        return
    }
    return (inputedDay ===0 || inputedDay ===6)
}

console.log(isWeekend('2022-02-12')); // true
console.log(isWeekend('2022-02-13')); // true
console.log(isWeekend('2022-02-09')); // false

console.log("----------task 4--------------");

const person = {
    fullName: 'Sherlock Holmes',
    address: {
        street: "Baker Street",
        city: "London",
        house: "221b"
    }
}
let jsonPerson = JSON.stringify(person);
let pharsePeson = JSON.parse(jsonPerson);
let {
    fullName,
    address:{
        street,
        city,
        house
    }} = pharsePeson;

console.log(fullName,street,city,house);

