var b1 = document.getElementById("butter");
var b2= document.getElementById("cat");
var b3= document.getElementById("hib");
var b4= document.getElementById("string");
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
b1.addEventListener("click", changeimage1);
b2.addEventListener("click", changeimage2);
b3.addEventListener("click", changeimage3);
b4.addEventListener("click", changeimage4);