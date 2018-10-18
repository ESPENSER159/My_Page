
var numeros = 0;

var input = document.getElementById("cantidad");

var div = document.getElementById("content");


// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
  	botonOk();
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
	
	for(var i = 1; i <= numeros; i++)
	{
		if(i % 3 == 0)
		{
			var p = "<p><span style='color: tomato'>Fizz</span><span style='color:#212121;'>("+i+")</span></p>";
			document.getElementById("guide").insertAdjacentHTML('beforebegin', p);
		}

		if(i % 5 == 0)
		{
			var p = "<p><span style='color: orange'>Buzz</span><span style='color:#212121;'>("+i+")</span></p>";
			document.getElementById("guide").insertAdjacentHTML('beforebegin', p);
		}

		if(i%3 != 0 && i % 5 != 0)
		{
			var p = "<p>"+i+"</p>";
			document.getElementById("guide").insertAdjacentHTML('beforebegin', p);
		}
	}
	
}

function botonOk(){
	clearDiv();
  	numeros = input.value;
  	mostrar();
}


// Detectar si es un dispositivo movil
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	 // Titulo
	 var title = document.getElementById("title");
	 title.style.width = "50vw";
	 title.style.marginLeft = "0px";

	// id espacio
	for(var t = 0; t <= 7; t++){
		document.getElementById("espacio"+t).setAttribute("style", "width: 12vw; padding: 0; float:left; height:auto;");
	}

	// id letters
	for (var i = 0; i <= 7; i++) {
		var divsLetters = document.getElementById(i);
		divsLetters.setAttribute("id","letters"+i);
	}
	for (var j = 0; j <= 7; j++) {
		document.getElementById("letters"+j).setAttribute("style", "font-size: 12vw; text-align: center; color: #00c3ff; font-weight: bold;");
	}

	// perdir cantida
	document.getElementById("cantidad").setAttribute("style", "width: 25%; height: 4vh; font-size: 4vw; margin-top: 50px;");

	// Boton Ok
	document.getElementById("botonOk").setAttribute("style", "font-size: 4vw;");

	// Div de respuestas
	document.getElementById("content").setAttribute("style", "width: 50%; height: 70%; font-size: 5vw;");

	// Texto
	let clock = setInterval(() => {
        clearInterval(clock)
        clock = null
        document.getElementById('textFB').style.fontSize = '5vw'
    }, 1500)

}
else {
	// id espacio
	for(var t = 0; t <= 7; t++){
		document.getElementById("espacio"+t).setAttribute("style", "padding: 0; width: 5vw; float:left; height:auto;");
	}

	// id letters
	for (var i = 0; i <= 7; i++) {
		var divsLetters = document.getElementById(i);
		divsLetters.setAttribute("id","letters"+i);
	}
	for (var j = 0; j <= 7; j++) {
		document.getElementById("letters"+j).setAttribute("style", "text-align: center; font-size: 5vw; color: #00c3ff; font-weight: bold;");
	}
}



