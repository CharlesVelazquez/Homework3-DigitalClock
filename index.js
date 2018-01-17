var numb1 = document.getElementById ('num1')
var numb2 = document.getElementById ('num2')
var add = document.getElementById ('add')
var minus = document.getElementById ('minus')
var multiply = document.getElementById ('multiply')
var divide = document.getElementById ('divide')
var result = document.getElementById ('result')
//variable.innerhtml targets text
//variable.style.'css code' targets variable and applies css

add.addEventListener ('click', adding);
minus.addEventListener ('click', minusing);
multiply.addEventListener ('click', multiplying);
divide.addEventListener ('click', dividing);

function adding ()
{
	var added =  parseInt(numb1.value) + parseInt(numb2.value);
		result.innerHTML = added
}

function minusing ()
{
	var minused =  parseInt(numb1.value) - parseInt(numb2.value);
		result.innerHTML = minused
}

function multiplying ()
{
	var multiplied =  parseInt(numb1.value) * parseInt(numb2.value);
		result.innerHTML = multiplied
}

function dividing ()
{
	var divided =  parseInt(numb1.value) / parseInt(numb2.value);
		result.innerHTML = divided
}