let fulldate =  new Date();
let year = fulldate.getFullYear();
let month = fulldate.getMonth() + 1;
let day = fulldate.getDate();

const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log("kk " + date);
    if (date === parseInt(date, 10))
        return undefined;
    else if (date === null)
        return undefined;
    else if (date == null)
        return undefined;
    else if (date == "Invalid Date")
        return undefined;
    else if (date instanceof String) {
        date = new Date(date);
        return days[date.getDay()];
    }
    else if (date instanceof Date)
        return days[date.getDay()];
    else
        return undefined;
}

try {
    document.getElementById('day').innerText = dayOfTheWeek();
    document.getElementById("date").innerHTML = day + " - " + month + " - " + year;
} catch(err) {}

exports.dayOfTheWeek = dayOfTheWeek;
