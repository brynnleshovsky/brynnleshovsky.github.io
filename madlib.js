var submit = document.getElementById("submit");
var character;
var noun;
var smallnoun;
var bodypart;
var othermcu;
var vehicle;
var food;
var villain;
var color;
var verb;
var story = document.getElementById("story");

function sub (){
	character = document.getElementById("character").value;
	noun = document.getElementById("noun").value;
	smallnoun = document.getElementById("smallnoun").value;
	bodypart = document.getElementById("bodypart").value;
	othermcu = document.getElementById("othermcu").value;
	vehicle = document.getElementById("vehicle").value;
	food = document.getElementById("food").value;
	villain = document.getElementById("villain").value;
	color = document.getElementById("color").value;
	verb = document.getElementById("verb").value;
	
	story.innerHTML= "One day " + character + " was walking through the park when he saw a " + noun + " bolt through the air! " + character + " then suddenly slipped on a " + smallnoun + " and broke his " + bodypart + "! He called " + othermcu + " to come pick him up in their " + vehicle +  ". On the way to the hospital, " + character + " heard a weird chewing sound... he looked around until he saw Groot chomping on " + food +  " behind the back seat! After fixing his " + color + " hair, " + character+ " finally walked into the hospital. Everything was fine until he realized that his doctor was actually Dr." + villain + "! " + character+ " " + verb + " Dr. " + villain + " and that was the last time "  + villain + " was ever seen."
}

submit.addEventListener("click", sub);