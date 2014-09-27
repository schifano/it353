function checkAnswers() {
	// create array to store all answers
	var answers = [9];

	// Validate Multiple Choice Question 1
	var radios = document.getElementsByName('multiple1');
	for (var i = 0, length = radios.length; i < length; i++) {
	   if (radios[i].checked && radios[i].value == 1) {
	      answers[0] = true;
	      break;
	    } else {
	    	answers[0] = false;
	    }
	}

	// Validate Multiple Choice Question 2
	var radios2 = document.getElementsByName('multiple2');
	for (var i = 0, length = radios2.length; i < length; i++) {
	   if (radios2[i].checked && radios2[i].value == 1) {
	      answers[1] = true;
	      break;
	    } else {
	    	answers[1] = false;
	    }
	}

	// Validate Multiple Choice Question 3
	var radios3 = document.getElementsByName('multiple3');
	for (var i = 0, length = radios3.length; i < length; i++) {
	   if (radios3[i].checked && radios3[i].value == 1) {
	      answers[2] = true;
	      break;
	    } else {
	    	answers[2] = false;
	    }
	}

	var bools = document.getElementsByName('tf');
	for (var i = 0, length = bools.length; i < length; i++) {
	   if (bools[i].checked && bools[i].value == 1) {
	      answers[3] = true;
	      break;
	    } else {
	    	answers[3] = false;
	    }
	}

	alert("answers: " + answers[0]);
	alert("answers: " + answers[1]);
	alert("answers: " + answers[2]);
	alert("answers: " + answers[3]);
}