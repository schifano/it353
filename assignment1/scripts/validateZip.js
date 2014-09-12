/* JS to validate correct zip code format */
function validateZip() {
    var aChar = null;
    var i = 0;
    var zipString = document.forms["formTest"]["zipCode"].value;   
    var zipLength = zipString.length; 

    // check zip code length
    if (zipLength < 5 || zipLength > 10) {
        alert("Zip code must be between 5 and 9 digits. You entered " + zipString.length + ".");
        return false;
    } else if (zipLength == 10 && zipString.charAt(5) == "-") {
        // check that the first five values are digits
        for (i = 0; i <= 4; i++) {
            aChar = zipString.charAt(i);
            if (isNaN(aChar)) {
                alert("Character " + aChar + " is not a digit.");
                return false;
            }
        }
        // check that last four values are digits
        for (i = 6; i < 10; i++) {
            aChar = zipString.charAt(i);
            if (isNaN(aChar)) {
                alert("Character " + aChar + " is not a digit.");
                return false;
            }
        }
        return true;
    } else {
        // check that each value is a digit
        for (i = 0; i < zipLength; i++) {
            aChar = zipString.charAt(i);
            if (isNaN(aChar)) {
                alert("Character " + aChar + " is not a digit.");
                return false;
            }
        }
    }
    return true;
}