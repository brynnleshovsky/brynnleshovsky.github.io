var enteredPass;
function checkcorrect (){
	enteredPass = document.getElementById("password").value;
if (enteredPass == "FloridaFroggy"){
	document.getElementById("access").innerHTML = "Access Granted!";
	document.getElementById("access").style.color = "green";
	window.location = "index.html";
}	
}

document.getElementById("check").addEventListener("click", checkcorrect)


function checkincorrect (){
if (document.getElementById("password").value !== "FloridaFroggy"){
	document.getElementById("access").innerHTML = "Try Again! The password " + document.getElementById("password").value + " was incorrect!";
	document.getElementById("access").style.color = "red";
}	
}

document.getElementById("check").addEventListener("click", checkincorrect)