const displayWeekDay = document.querySelector(".weekday");
const displayDate = document.querySelector(".date");
const displayHour = document.querySelector(".hour");

const now = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const week_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const weekDay = week_days[now.getDay()];

const month_name = months[now.getMonth()];
const month_number = now.getMonth();
const day = now.getDate();
const year = now.getFullYear()


displayWeekDay.innerHTML = weekDay;
displayDate.innerHTML = `${month_number + 1}/${day}/${year}`;
displayHour.innerHTML = formatAMPM();

function formatAMPM(){
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM":"AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes: minutes;
    let strTime = `${hours}:${minutes}:${ampm}`;
    return strTime
}
