var time = new Date(); //Grabs the Time
var hour = document.getElementById('hour')//Targets place hours will go
var minute = document.getElementById('minute')//Targets place minutes will go
var second = document.getElementById('second')//Targets place seconds will go
var greeting = document.getElementById('greeting')
var pic = document.getElementById('pic')
var check_hour, check_minute, check_second;// declared variables I'll use to check the corrosponding time

//Function to set the time in the HTML and Background
setInterval (function (){
    time = new Date();//Grabbing the time every second
    check_hour = time.getHours();//seperating for checks
    check_minute = time.getMinutes();
    check_second = time.getSeconds();

//These if statments add a 0 if the numbers are single digits, starting with hours
if (check_hour < 10){
    hour.innerHTML = '0' + time.getHours() + ':';
}
else if (check_hour >= 13 && check_hour <= 23){
        var fix0 = time.getHours() - 12
        hour.innerHTML = '0' + fix0 + ':';
}
else if (check_hour == 0){
    hour.innerHTML = time.getHours() + '1:';
}
else{
    hour.innerHTML = time.getHours() + ':';
}
//now minutes
if (check_minute < 10){
    minute.innerHTML = '0' + time.getMinutes() + ':';
}
else{
    minute.innerHTML = time.getMinutes() + ':';
}
//Also added a function to seconds to add the AM and PM
if (check_second < 10){
    second.innerHTML = '0' + time.getSeconds() + am_pm(check_hour);
}
else{
    second.innerHTML = time.getSeconds() + am_pm(check_hour);
}
//Now making the if statments to change background and greeting
if (check_hour < 12){//Morning
        pic.style.backgroundImage = "url('img/Morning.png')"
        greeting.innerHTML = 'Good Morning';
}
else if (check_hour >= 12 && check_hour <= 16){//Afternoon
        pic.style.backgroundImage = "url('img/Afternoon.jpg')"
        greeting.innerHTML = 'Good Afternoon';
}
else if (check_hour >= 17 && check_hour <= 19){//Evening
        pic.style.backgroundImage = "url('img/Evening.jpg')"
        greeting.innerHTML = 'Good Evening';
}

else if (check_hour >= 20 && check_hour <= 23){//Night
        pic.style.backgroundImage = "url('img/Night.jpg')"
        greeting.innerHTML = 'Good Night';
}}, 1000)

//Function to return AM or PM when invoked
function am_pm (check_hour){
    if (check_hour >=12) {return ' PM'}
    else{return ' AM'}
}