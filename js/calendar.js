/*
*
*	Calendar.js - Kenneth Rhodes
*	Task: Change month to current month and year to current year -> Generate a <li> list of days
*	for month -> Match days to week day. -> Update selected day to todays date
*	
*	Task 2: If user clicks arrow show user next or last month.
*
*	Task 3: If user clicks on a date, bring up tasks for that date.
*
*/

// Initialize Variables
let eleCurrentYear = document.getElementById("currentYear");
let eleCurrentMonth = document.getElementById("currentMonth");
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let month;
let eleDays = document.getElementsByClassName("days");
let day = document.getElementsByClassName("day");
let days;
let activeDay = document.getElementsByClassName("active");
let currentDay = new Date().getDate();
let i;

// Change year
eleCurrentYear.innerHTML = currentYear;

// Switch month from an integer to a string.
switch(currentMonth){
	case 0:
		month = "January";
	break;
	case 1:
		month = "February";
	break;
	case 2:
		month = "March";
	break;
	case 3:
		month = "April";
	break;
	case 4:
		month = "May";
	break;
	case 5:
		month = "June";
	break;
	case 6:
		month = "July";
	break;
	case 7:
		month = "August";
	break;
	case 8:
		month = "September";
	break;
	case 9:
		month = "October";
	break;
	case 10:
		month = "November";
	break;
	case 11:
		month = "December";
}

// Change month
eleCurrentMonth.innerHTML = month;

// Figure out how many days are in the current month
// Create li elements in the "days" class with the number between the tags and in the
// "value" attribute.
for (i = 0; i < 31; i++){
	
}

// Match each element with correct day.

// Change day
	// Add "active" class to currentDay.


/*const changeDay = () => {
	console.log("User cliked the date once.");
	if (day.length > 0){
		activeDay[0].classList.remove("active");
		day[0].classList.add("active");
	}
}

day[0].addEventListener("click", changeDay);*/

// Select Date and change it to active. 
