function checkcorrect (){
if (document.getElementById("password").value == "FloridaFroggy"){
	document.getElementById("access").innerHTML = "Access Granted!"
}	
}

document.getElementById("check").addEventListener("click", checkcorrect)


function checkincorrect (){
if (document.getElementById("password").value !== "FloridaFroggy"){
	document.getElementById("access").innerHTML = "Access Denied!"
}	
}

document.getElementById("check").addEventListener("click", checkincorrect)