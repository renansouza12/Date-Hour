const displayWeekDay = document.querySelector(".weekday");
const displayDate = document.querySelector(".date");
const displayHour = document.querySelector(".hour");

const now = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const week_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const weekDay = week_days[now.getDay()];

const month_name = months[now.getMonth()];
const day = now.getDate();
const year = now.getFullYear()

