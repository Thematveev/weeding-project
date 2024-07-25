const day = document.querySelector('.clock-day');
const hour = document.querySelector('.clock-hours');
const minute = document.querySelector('.clock-minutes');
const second = document.querySelector('.clock-seconds');





const eventTime = new Date(2024, 8, 5, 14, 0, 0, 0);





function renderTimer(days, hours, minutes, seconds){
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
}

function secondsToDhms(s) {
    var s = parseInt(s, 10) / 1000;

    var d = Math.floor(s / (3600*24));
    s  -= d*3600*24;
    var h   = Math.floor(s/ 3600);
    s -= h*3600;
    var m = Math.floor(s / 60);
    s  -= m*60;
    s = s.toFixed(0);
    
    return {d, h, m, s}
    }

function setTime(){
    const left = secondsToDhms(eventTime - new Date());
    renderTimer(left.d, left.h, left.m, left.s);
}
setTime();
setInterval(setTime, 500)