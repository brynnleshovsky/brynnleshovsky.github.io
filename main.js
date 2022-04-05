function strawberry (){
	document.getElementById("Hello").innerHTML = "Strawberry";
	document.getElementById("Hello").style.backgroundColor = "pink";
}
document.getElementById("s").addEventListener("click", strawberry);
function lemon(){
	document.getElementById("Hello").innerHTML = "Lemon";
	document.getElementById("Hello").style.backgroundColor = "lightyellow";
	}
document.getElementById("l").addEventListener("click", lemon);
function grape(){
	document.getElementById("Hello").innerHTML = "Grape";
	document.getElementById("Hello").style.backgroundColor = "lavender";
	}
document.getElementById("g").addEventListener("click", grape);
function pear(){
	document.getElementById("Hello").innerHTML = "Pear";
	document.getElementById("Hello").style.backgroundColor = "lightgreen";
	}
document.getElementById("p").addEventListener("click", pear);
function blueberry(){
	document.getElementById("Hello").innerHTML = "Blueberry";
	document.getElementById("Hello").style.backgroundColor = "lightblue";
	}
document.getElementById("b").addEventListener("click", blueberry);
function white(){
	document.getElementById("Hello").innerHTML = "White";
	document.getElementById("Hello").style.backgroundColor = "white";
	}
document.getElementById("w").addEventListener("click", white);
function grey(){
	document.getElementById("Hello").innerHTML = "Grey";
	document.getElementById("Hello").style.backgroundColor = "grey";
	}
document.getElementById("grey").addEventListener("click", grey);
function brown(){
	document.getElementById("Hello").innerHTML = "Brown";
	document.getElementById("Hello").style.backgroundColor = "#6A4E43";
	}
document.getElementById("brown").addEventListener("click", brown);
function navy(){
	document.getElementById("Hello").innerHTML = "Navy";
	document.getElementById("Hello").style.backgroundColor = "#0413B5";
	}
document.getElementById("navy").addEventListener("click", navy);
function revertcolor(){
	document.getElementById("Hello").innerHTML = "Hello World!";
	document.getElementById("Hello").style.backgroundColor = "cadetblue";
	}
document.getElementById("r").addEventListener("click", revertcolor);