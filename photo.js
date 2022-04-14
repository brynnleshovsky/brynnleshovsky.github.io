var b1 = document.getElementById("butter");
var b2= document.getElementById("cat");
var b3= document.getElementById("hib");
var b4= document.getElementById("string");
var b5 = document.getElementById("pothos");
var b6 = document.getElementById("fern");
var b7 = document.getElementById("calathea");
var b8 = document.getElementById("monstera");
var b9 = document.getElementById("croton");
var b10 = document.getElementById("pond");
var image = document.getElementById("buttonphoto")

function changeimage1 (){
	image.src = "Images/ACS_0012 (1).JPG";
}
function changeimage2 (){
	image.src = "Images/ACS_0013.JPG";
}
function changeimage3 (){
	image.src = "Images/IMG_2555.jpg";
}
function changeimage4 (){
	image.src = "Images/ACS_0015.JPG";
}
function changeimage5 (){
	image.src = "Images/pothos.JPG";
}
function changeimage6 (){
	image.src = "Images/fern.JPG";
}
function changeimage7 (){
	image.src = "Images/calathea.JPG";
}
function changeimage8 (){
	image.src = "Images/monstera.JPG";
}
function changeimage9 (){
	image.src = "Images/croton.JPG";
}
function changeimage10 (){
	image.src = "Images/pond.JPG";
}
b1.addEventListener("click", changeimage1);
b2.addEventListener("click", changeimage2);
b3.addEventListener("click", changeimage3);
b4.addEventListener("click", changeimage4);
b5.addEventListener("click", changeimage5);
b6.addEventListener("click", changeimage6);
b7.addEventListener("click", changeimage7);
b8.addEventListener("click", changeimage8);
b9.addEventListener("click", changeimage9);
b10.addEventListener("click", changeimage10);
