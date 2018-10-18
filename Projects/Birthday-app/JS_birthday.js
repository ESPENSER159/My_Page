


// Detectar si es un dispositivo movil
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

	//title
	document.getElementById("title").style.fontSize = "8vw";
	// imgs title
	document.getElementById("iconApp").style.width = "9vw";
	document.getElementById("iconApp2").style.width = "9vw";

	// description
	var descrip = document.getElementById("descrip");
	descrip.style.fontSize = "4.5vw";

	// imagen de muestra
	document.getElementById("imgApp").style.width = "60vw";

	// enlace de descarga
	var cuboEnlace = document.getElementById("downloadAPP");
	cuboEnlace.style.fontSize = "5vw";
	cuboEnlace.style.width = "35vw";


	// img github
	document.getElementById("imgGitHub").style.width = "20vw";


	var enlace = document.getElementById("enlace");
	enlace.style.fontSize = "2vw";

	var github = document.getElementById("github");
	github.style.display = "block";
}