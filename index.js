//declaring elements
// var clock = document.getElementById('clock');//Grabbing canvas
// var context = clock.getContext ('2d');//grabbing internal stuff
// var radius = clock.height / 2; //self explanitory
// context.translate (radius, radius);//moves context to the center of the object
// radius = radius * 0.90;//necessary to properly draw clock by reducing the radius to 90%
// drawClock();

// function drawClock()//does the actual drawing of the clock
// {
// 	context.arc (0,0,radius,0,2 * Math.PI);
// 	context.fillStyle = 'White';
// 	context.fill();
// 	drawFace (context, radius); //makes the clock face minus the hands
// 	makeNumbers (context, radius);
// }

// function drawFace(context, radius)
// {
// 	var gradient; //going to use to add that gradient effect
// 	context.beginPath();//starting a drawing location
// 	context.arc(0, 0, radius, 0, 2*Math.PI);//draws a circle for me =)
//     context.fillStyle = 'white';//Da color
//     context.fill();//Actually executes the drawing

//     gradient = context.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);//this I learned from w3schools, I still don't really understand it
//     gradient.addColorStop(0, '#333');//color effect for inner
//     gradient.addColorStop(0.5, 'white');//color effect for middle
//     gradient.addColorStop(1, '#333');//color effect for outer
//     context.strokeStyle = gradient; //the gradient is now like A brush that will be used to draw =)
//     context.lineWidth = radius*0.1; //making a line 10% of the radius
//     context.stroke();//actually draw

//     context.beginPath();//setting a new location, drawing the clock nose below
//     context.arc(0, 0, radius*0.1, 0, 2*Math.PI);
//     context.fillStyle = '#333';
//     context.fill();
// }

// function makeNumbers (context, radius)
// {
// 	var angle //will dictate location
// 	var number //the actual numbers
// 	ctx.font = radius*0.15 + "px arial";
// }


// context.beginPath();
// context.arc(95,50,40,0,2*Math.PI);
// context.stroke();

//.createLinearGradient(x,y,x1,y1) - creates a linear gradient
//.createRadialGradient(x,y,r,x1,y1,r1) - creates a radial/circular gradient
//.addColorStop() method specifies the color stops, and its position along the gradient. Gradient positions can be anywhere between 0 to 1
//*Makes the blur ^

//font - defines the font properties for the text
//fillText(text,x,y) - draws "filled" text on the canvas
//strokeText(text,x,y) - draws text on the canvas (no fill)

var time = new Date(); //Grabs the Time
var hour = document.getElementById('hour')//Targets place hours will go
var minute = document.getElementById('minute')//Targets place minutes will go
var second = document.getElementById('second')//Targets place seconds will go
var background = document.getElementById('background')//Targets place the background picture will go
var check_hour, check_minute, check_second;// declared variables I'll use to check the corrosponding time

//Function to set the time in the HTML and Background
setInterval (function ()
{
    time = new Date();
    check_hour = time.getHours();
    check_minute = time.getMinutes();
    check_second = time.getSeconds();
//These if statments add a 0 if the numbers are single digits
if (check_hour < 10)
    {hour.innerHTML = '0' + time.getHours() + ':';}
else if (check_hour >= 13 && check_hour <= 23)
    {hour.innerHTML = time.getHours() - 12 + ':';}
else if (check_hour == 0)
    {hour.innerHTML = time.getHours() + '1:';}
else
    {hour.innerHTML = time.getHours() + ':';}

if (check_minute < 10)
    {minute.innerHTML = '0' + time.getMinutes() + ':';}
else
    {minute.innerHTML = time.getMinutes() + ':';}

//Also added a function to seconds to add the AM and PM
if (check_second < 10)
    {second.innerHTML = '0' + time.getSeconds() + am_pm(check_hour);}
else
    {second.innerHTML = time.getSeconds() + am_pm(check_hour);}

//Now making the if statments to change background and greeting

if (check_hour < 12)//Morning
    {
        document.body.style.backgroundImage = "url('img/Morning.png')"
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = "repeat-y";
    }
else if (check_hour >= 12 && check_hour <= 16)//Aftermoon
    {
        document.body.style.backgroundImage = "url('img/Afternoon.jpg')"
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = "repeat-y";
    }
else if (check_hour >= 17 && check_hour <= 19)//Evening
    {
        document.body.style.backgroundImage = "url('img/Evening.jpg')"
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = "repeat-y";
    }

    if (check_hour >= 20 && check_hour <= 23)//Night
    {
        document.body.style.backgroundImage = "url('img/Night.jpg')"
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = "repeat-y";
    }

}, 1000)

//Function to return AM or PM when invoked
function am_pm (check_hour)
{
    if (check_hour >=12)
        {
            return ' PM'
        }
    else
        {
            return ' AM'
        }
}