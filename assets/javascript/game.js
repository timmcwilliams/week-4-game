// start jscript
// declare variables
var crystalOne=Math.floor(Math.random() * 12) + 1;
var crystalTwo=Math.floor(Math.random() * 12) + 1;
var crystalThree=Math.floor(Math.random() * 12) + 1;
var crystalFour =Math.floor(Math.random() * 12) + 1;
var random = Math.floor(Math.random() * 101)+ 19;
var guessTotal=0;
var guess=0;
var wins=0;
var winsTotal=0;
var loses=0;
var losesTotal=0;

function checkUserScore(){ 
 	if (guessTotal>random){
		alert("you lose!");
		losesTotal=losesTotal+1;
		guessTotal=0;
		// alert("you lost " + losesTotal)

// adding to try and put everthing in a function
$("#total").html("Total Points " + guessTotal);
$("#loses").html("Games Lost " + losesTotal);
$("#wins").html("Games Won " + winsTotal);


	}	
 	else if (guessTotal==random){
 		// alert("you win
 		winsTotal=winsTotal+1;	
		alert("you won!")
		guessTotal=0;
 	}
 	}
// doc ready function
$(document).ready(function() {
	$("#random").html("Your Random Number " + random);
	
// assign a value to box 1 
$("#box-1").on("click", function() {	
		guessTotal=crystalOne + guessTotal;
		$("#total").html("Total Points " + guessTotal);
		$(checkUserScore);
		$("#loses").html("Games Lost " + losesTotal);
		$("#wins").html("Games Won " + winsTotal);
});
// assign a value to box 2 
$("#box-2").on("click", function() {		
		guessTotal=crystalTwo + guessTotal;
		$("#total").html("Total Points " + guessTotal);
		$(checkUserScore);
		$("#loses").html("Games Lost " + losesTotal);
		$("#wins").html("Games Won " + winsTotal);
});	
// assign a value to box 3 
$("#box-3").on("click", function() {	
		guessTotal=crystalThree + guessTotal;	
		$("#total").html("Total Points " + guessTotal);		
		$(checkUserScore);
		$("#loses").html("Games Lost " + losesTotal);
		$("#wins").html("Games Won " + winsTotal);
});
// assign a value to box 4 
$("#box-4").on("click", function() {	
		guessTotal=crystalFour + guessTotal;		
		$("#total").html("Total Points " + guessTotal);
		$(checkUserScore);
		$("#loses").html("Games Lost " + losesTotal);
		$("#wins").html("Games Won " + winsTotal);
});
});