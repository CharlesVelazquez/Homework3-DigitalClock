//declaring elements
var clock = document.getElementById('clock');//Grabbing canvas
var context = clock.getContext ('2d');//grabbing internal stuff
var radius = clock.height / 2; //self explanitory
context.translate (radius, radius);//moves context to the center of the object
radius = radius * 0.90;//necessary to properly draw clock by reducing the radius to 90%
drawClock();

function drawClock()//does the actual drawing of the clock body
{
	context.arc (0,0,radius,0,2 * Math.PI);
	context.fillStyle = 'White';
	context.fill();
}
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

