
var numeros = 0;

var input = document.getElementById("cantidad");

var div = document.getElementById("content");


// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {

  	clearDiv();
  	numeros = input.value;
  	mostrar();

  }
});

// Vaciar div principal y crear un div hijo
function clearDiv(){
	document.getElementById("content").innerHTML = "";
  	var iDiv = document.createElement('div');
	iDiv.id = 'guide';
	document.getElementById('content').appendChild(iDiv);
}

function mostrar(){
	clearDiv();
	
	for(var i = 1; i <= numeros; i++)
	{
		if(i % 3 == 0)
		{
			var p = "<p><span style='color: tomato'>Fizz</span><span style='color:#212121; font-size: 15px;'>("+i+")</span></p>";
			document.getElementById("guide").insertAdjacentHTML('beforebegin', p);
		}

		if(i % 5 == 0)
		{
			var p = "<p><span style='color: orange'>Buzz</span><span style='color:#212121; font-size: 15px;'>("+i+")</span></p>";
			document.getElementById("guide").insertAdjacentHTML('beforebegin', p);
		}

		if(i%3 != 0 && i % 5 != 0)
		{
			var p = "<p>"+i+"</p>";
			document.getElementById("guide").insertAdjacentHTML('beforebegin', p);
		}
	}
	
}


