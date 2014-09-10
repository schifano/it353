/* 
Write a JavaScript program that prompts for an employee name, SSN, rate of pay, and hours worked, and computes the total pay for the employee.

If the hours worked is greater than 40, compute by using 1.5 times regular rate for the hours above 40. Thus, if one works for 50 hours and is paid $10/hr, the total pay should be $550.

Use the default values of 10 for rate and 50 for hours when prompting for these values.

Include screenshots that show the output of code. Show one with hours < 40, = 40, and > 40.
*/
function computeTotalPay() {
	var name = null;
	var ssn = null;
	var payRate = 0;
	var hoursWorked = 0;
	var overtime = 0;
	var totalPay = 0;
	var overtimePay = 0;

	name = prompt("Enter your name: ");
	ssn = prompt("Enter your social security number: ");
	payRate = parseInt(prompt("Enter your rate of pay per hour: "));
	hoursWorked = parseInt(prompt("Enter your total hours worked: "));

	if (hoursWorked > 40) {
		overtime = (hoursWorked - 40);
		totalPay = (40 * payRate) + (overtime * (1.5 * payRate));
	} else {
		totalPay = (hoursWorked * payRate);
	}
	alert("Name: " + name +
				"\nSocial Security Number: " + ssn +
				"\nPay Rate: " + payRate +
				"\nHours Worked: " + hoursWorked +
				"\nTotal Pay: " + totalPay);
}