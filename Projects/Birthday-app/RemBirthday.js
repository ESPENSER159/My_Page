


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
	descrip.style.marginTop = "70px";

	// imagen de muestra
	var imgApp = document.getElementById("imgApp");
	imgApp.style.width = "90vw";
	imgApp.style.marginTop = "50px";

	// enlace de descarga
	var cuboEnlace = document.getElementById("downloadAPP");
	cuboEnlace.style.fontSize = "7vw";
	cuboEnlace.style.width = "40vw";
	cuboEnlace.style.height = "90px";
	cuboEnlace.style.marginTop = "100px";


	// img github
	document.getElementById("imgGitHub").style.width = "15vw";

	// URL
	var enlace = document.getElementById("enlace");
	enlace.style.fontSize = "3vw";

	// ID GitHub
	var github = document.getElementById("github");
	github.style.display = "block";
	github.style.position = "fixed";
	github.style.bottom = "0";
	github.style.marginBottom = "30px";
}