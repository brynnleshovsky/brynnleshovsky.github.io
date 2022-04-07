function check (){
if (document.getElementById("password").value == "FloridaFroggy"){
	document.getElementById("access").innerHTML = "Access Granted!"
}	
}

document.getElementById("check").addEventListener("click", check)