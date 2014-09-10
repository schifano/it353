/* 
Write a JavaScript program that will display one page when it is during 
the regular business hours (8 a.m. to 5 p.m.) and a different page during 
off hours. Make sure you check the conditions properly!
(For example, when it is 5 p.m. exactly, what does your code do?)
*/
function displayPage() {
	var date = new Date(); // create new Date object
	var current_hour = date.getHours();
	var current_minutes = date.getMinutes();
	
	// TEST VALUE for 5:00PM
	/*
	var current_hour = 17;
	var current_minutes = 0;
	*/

	// First, check if it is EXACTLY 5:00PM
	if (current_hour == 17 && current_minutes == 0) {
		window.location.href = "off-hours.html";
	} else if (current_hour >= 8 && current_hour <= 17) {
		window.location.href="business-hours.html";
	} else {
		window.location.href="off-hours.html";
	}
}