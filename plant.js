var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var dry = 0;
var wet = 0;
var expert = 0;
var button = document.getElementById("button");
var result = document.getElementById("result");

function addDry() {
	dry = dry +1;
}

function addWet() {
	wet = wet +1;
}

function addExpert() {
	expert = expert +1;
}



function Calc (){
dry = 0;
wet = 0;
expert = 0;	
	if (q1.value == "I drown them!"){
		addDry();
	}
	if (q1.value == "I haven't watered my cactus in three weeks..."){
		addDry();
	}
	if (q1.value == "I know just the right amount"){
		addExpert();
	}
	
	
	
	
	if (q2.value == "I know a fair amount"){
		addExpert();
	}
	if (q2.value == "I could do this all day!"){
		addExpert();
	}
	if (q2.value == "ummm grass?"){
		addDry();
	}
	if (q2.value == "maybe five?"){
		addWet();
	}

	
	
	
	
	if (q3.value == "Only for decoration."){
		addDry();
	}
	if (q3.value == "Plants are my passion!"){
		addExpert();
	}
	if (q3.value == "I like plants"){
		addWet();
	}
	
	
	
	
	
	if (q4.value == "Cactus"){
		addDry();
	}
	if (q4.value == "Ferns"){
		addWet();
	}
	if (q4.value == "none..."){
		addDry();
	}
	if (q4.value == "I can keep anything alive!!"){
		addExpert();
	}
	
	

	if(dry > wet){
	result.innerHTML = "Ahh the desert parent. You do well with plants that require infrequent watering. Click the link that says *Casual parents* below!"	
	}
	if(dry >expert){
	result.innerHTML = "Ahh the desert parent. You do well with plants that require infrequent watering. Click the link that says *Casual parents* below!"	
	}
	if(wet > dry){
	result.innerHTML = "The over active parent. You like to take care of your plants a little *too* well at times. Click the link that says *Helicopter parents* below!"	
	}
	if(wet > expert){
	result.innerHTML = "The over active parent. You like to take care of your plants a little *too* well at times. Click the link that says *Helicopter parents* below!"	
	}
	if(expert > dry){
	result.innerHTML = "You are an experienced cultivator! Click the link below that says *This is my eigth parents* to find inspiration for some new exotic plants to add to your collection!"	
	}
	if(expert > wet){
	result.innerHTML = "You are an experienced cultivator! Click the link below that says *This is my eigth parents* to find inspiration for some new exotic plants to add to your collection!"	
	}
}

button.addEventListener("click", Calc);
