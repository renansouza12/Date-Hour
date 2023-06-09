const displayWeekDay = document.querySelector(".weekday");
const displayDate = document.querySelector(".date");
const displayHour = document.querySelector(".hour");
const body = document.querySelector('body');


const  now = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const week_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const weekDay = week_days[now.getDay()];

const month_name = months[now.getMonth()];
const month_number = now.getMonth();
const day = now.getDate();
const year = now.getFullYear()


displayWeekDay.innerHTML = weekDay;
displayDate.innerHTML = `${month_number + 1}/${day}/${year}`;


function formatAMPM(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM":"AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes: minutes;

    displayHour.innerHTML = `${hours}:${minutes} ${ampm}`;
}

setInterval(formatAMPM, 1000);

function dynamicBackground(){
  const time = now.getHours();
  const  imageSrc = document.querySelector("img");
    if( time  == 5){
        imageSrc.src = 'assets/sunrise.jpg';
    }
    else if(time > 5 && time < 12){
        imageSrc.src = 'assets/morning.jpg';
    }
    else if(time >=12 && time < 17){
        imageSrc.src = 'assets/afternoon.jpg';
    }else if(time == 17){
        imageSrc.src = 'assets/sunset.jpg';
    }
    else if(time >17 && time < 21){
        imageSrc.src = 'assets/evening.jpg';

    }else{
        imageSrc.src = 'assets/night.jpg';
    }
}
dynamicBackground();