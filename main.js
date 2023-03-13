const displayWeekDay = document.querySelector(".weekday");
const displayDate = document.querySelector(".date");
const displayHour = document.querySelector(".hour");

let d = new Date();
let day = d.getDate();

const week_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const weekDay = week_days[d.getDay()];
