/*
Given N test scores, write a JavaScript program to compute the 
(a) lowest, (b) highest, (c) average scores, and 
(d) list the scores that are higher than the average. 
Prompt the user for the value of N and the individual scores. 
You are to use the method "prompt" to do this question, not HTML form.
*/

// Prompt user for test scores
// Indicate if user is finished
// Calculate lowest, highest, average
// List scores higher than average
function calcTestScores() {
	var n = 0;
	var scores = [];
	var aboveAverage = [];
	var score = 0;
	var average = 0;
	var i = 0;
	var j = 0;
	var k = 0;
	var z = 0;
	// Prompt user for total number of scores
	n = prompt("Enter the total number of test scores: ");
	if (n <= 0) {
		alert("Invalid input.");
		return;
	}
	scores.length = n;
	// Prompt user for all scores, store in array
	for (i = 0; i < n; i++) {
		score = prompt("Enter a test score: ");
		scores[i] = score;
		console.log("score: " + score);	
	}
	// Compare each value in the array
	var min = scores[0];
	var max = scores[0];
	for (j = 0; j < n; j++) {
		score = scores[j];
		if (score > max) {
			max = score;
		}
		if (score < min) {
			min = score;
		}
	}
	// Calculate the average value
	for (k = 0; k < n; k++) {
		score = parseInt(scores[k]);
		console.log("SCORE: " + score);
		average += score;
		console.log(average);
	}
	average = (average/n);
	// Store all scores higher than average
	var count = 0;
	for (z = 0; z < n; z++) {
		score = parseInt(scores[z]);
		if (score > average) {
			aboveAverage[count++] = score;
		}
	}
	// Alert user of results
	alert("Results:\n" + "The lowest score is: " + min +
				"\nThe highest score is: " + max +
				"\nThe average score is: " + average +
				"\nAll scores above the average are: " + aboveAverage.toString());
}