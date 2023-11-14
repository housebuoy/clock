// 

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

if(hrs >= 12){ 
    session.innerHTML = 'PM';
}else{
    session.innerHTML = 'AM';
}

if(hrs > 12){
    hrs -= 12;
}

if(hrs < 10 || hrs > 12){
    hrs = '0' + hrs;
}
if(sec < 10){
    sec = '0' + sec;
}

if(min < 10){
    min = '0' + min;
}

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime, 10);

function displayCalendar(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day_th = String(currentDate.getDate()).padStart(2, '0');

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const day = daysOfWeek[currentDate.getDay()];

    document.getElementById('year').innerHTML = year;
    document.getElementById('month').innerHTML = month;
    document.getElementById('day_th').innerHTML = day_th;
    document.getElementById('day').innerHTML = day;
}

displayCalendar();