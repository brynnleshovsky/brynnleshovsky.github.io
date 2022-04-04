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