/* JS to validate correct zip code format */
function validateZip() {
    var aChar = null;
    var i = 0;
    var zipString = document.forms["formTest"]["zipCode"].value;   
    var zipLength = zipString.length; 

    // check zip code length
    if (zipLength < 5) {
        alert("Zip code must be at least 5 digits. You entered " + zipString.length + ".");
        // return false;
    } else if (zipLength == 10 && zipString.charAt(5) == "-") {
        // check that each value is a digit
        for (i = 0; i < 4; i++) {
            aChar = zipString.charAt(i);
            if (isNaN(aChar)) {
                alert("Character " + aChar + " is not a digit.");
                return false;
            }
            return true;
        }
    } else {
        // check that each value is a digit
        for (i = 0; i < zipLength; i++) {
            aChar = zipString.charAt(i);
            if (isNaN(aChar)) {
                alert("Character " + aChar + " is not a digit.");
            }
        }
    }

    return true;
}


/*(b) [6 pts] For zip code, the format is either (i) ddddd or 
(ii) ddddd-dddd where d represents a digit.
*/