var count = 0;
function decrease() {
	count = count -1;
	document.getElementById("counterp").innerHTML = count;
}
function increase (){
	count = count+1;
	document.getElementById("counterp").innerHTML = count;
}
document.getElementById("plus").addEventListener("click", increase);
document.getElementById("minus").addEventListener("click", decrease);