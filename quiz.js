var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var score = document.getElementById("score");
var sub = document.getElementById("submit");
var result = 0;
var comment = document.getElementById("comment");

function add (){
	result = result + 1;
}

function calc (){
	result = 0;
	if (q1.value == "2001"){
		add();
		}
	if (q2.value == "Trick question! Ron and Hermione!"){
		add();
		}
	if (q3.value == "Hedwig"){
		add();
		}
	if (q4.value == "Gryffindor"){
		add();
		}
	if (q5.value == "Professor Quirrell"){
		add();
		}
	if (q6.value == "Platform 9 3/4"){
		add();
		}
	if (q7.value == "None of these"){
		add();
		}
	if (q8.value == "Diagon Alley"){
		add();
		}
	if (q9.value == "A dragon egg"){
		add();
		}
	if (q10.value == "Snape"){
		add();
		}
	score.innerHTML=result + "/10";
	if(result >= 6){
	comment.innerHTML = "Great job!"	
	}
	else{
	comment.innerHTML = "Do better next time!"	
	}
	
}
sub.addEventListener("click", calc);



//do each q 
//need to display the score
//add an event listener