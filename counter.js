var count = 0;
function decrease() {
	count = count -1;
	document.getElementById("counterp").innerHTML = count;
	if (count <= 10){
		document.getElementById("counterp").style.color = "black";
	}
	if(count == 68){
		document.getElementById("counterp").innerHTML = "Nice!";
	}
}
function increase (){
	count = count+1;
	document.getElementById("counterp").innerHTML = count;
	if (count > 10){
		document.getElementById("counterp").style.color = "red";
	}
	
	if(count == 68){
		document.getElementById("counterp").innerHTML = "Nice!";
	}
}
function minus5 (){
	count = count-5;
	document.getElementById("counterp").innerHTML = count;
}
function mult10 (){
	count = count*10;
	document.getElementById("counterp").innerHTML = count;
}
function div2 (){
	count = count/2;
	document.getElementById("counterp").innerHTML = count;
}
function plus5 (){
	count = count+5;
	document.getElementById("counterp").innerHTML = count;
}
function zero (){
	count = 0;
	document.getElementById("counterp").innerHTML = count;
}
function plus100 (){
	count = count + 100;
	document.getElementById("counterp").innerHTML = count;
}
document.getElementById("plus").addEventListener("click", increase);
document.getElementById("plus100").addEventListener("click", plus100);
document.getElementById("zero").addEventListener("click", zero);
document.getElementById("minus").addEventListener("click", decrease);
document.getElementById("minus5").addEventListener("click", minus5);
document.getElementById("plus5").addEventListener("click", plus5);
document.getElementById("mult10").addEventListener("click", mult10);
document.getElementById("divis2").addEventListener("click", div2);

