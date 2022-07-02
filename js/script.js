let fulldate =  new Date();
let year = fulldate.getFullYear();
let month = fulldate.getMonth() + 1;
let date = fulldate.getDate();

const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

try {
    document.getElementById("date").innerHTML = date + " - " + month + " - " + year;
    document.getElementById('day').innerText = dayOfTheWeek();
} catch(err) {}

exports.dayOfTheWeek = dayOfTheWeek;
