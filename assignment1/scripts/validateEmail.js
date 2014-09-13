/* JS to validate correct email format */
function validateEmail() {
    var emailString = document.forms["formTest"]["email"].value;   
    var emailLength = emailString.length; 
    var i = 0;
    var atChar = null;
    var atPeriod = null;
    var aPeriod = 0;
    var atCharPosition = 0;

    // check if @ or a period appears as first char
    if (emailString.charAt(0) == '@' || emailString.charAt(0) == '.') {
    	alert("@ or . cannot appear as the first character");
    	return false;
    }
    // check if @ or a period appears as last char
    if (emailString.charAt(emailLength - 1) == '@' || emailString.charAt(emailLength - 1) == '.') {
    	alert("@ or . cannot appear as the last character");
    	return false;
    }
    // check for single @
    for (i = 0; i < emailLength; i++) {
    	aChar = emailString.charAt(i);
    	if(aChar == '@') {
    		atChar++;
    		atCharPosition = i;
    		// check for period immediately after @ symbol
				atPeriod = emailString.charAt(i+1);
				if (atPeriod == '.') {
					alert(". cannot appear immediately after @");
					return false;
				}
    	}
    }
    if (atChar > 1 || atChar < 1) {
    	alert("You must have exactly one @ symbol");
    	return false;
    }
    // check remaining string after @ symbol for .
    atCharPosition += 1;
    for (i = atCharPosition; i < emailLength; i++) {
    	aChar = emailString.charAt(i);
    	if(aChar == '.') {
    		aPeriod++;
    	}
    }
    if (aPeriod < 1) {
    	alert("You must have at least 1 period after the @ symbol");
    	return false;
    }
    return true;
}