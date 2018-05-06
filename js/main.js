// Enable Tooltips Everywhere
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

// Make tooltips not scroll to top.
$('.tool-tip').click( function(e) {
	e.preventDefault();
});

// For sideNav, https://www.w3schools.com/howto/howto_js_sidenav.asp
let navIsOpen = false;
console.log(`Nav is Open: ${navIsOpen}`);

const openNav = () =>{
	document.getElementById("mySideNav").style.width = "100%";
	document.getElementById("navTextWrapper").style.display = "block";
	navIsOpen = true;
	console.log(`Nav is Open: ${navIsOpen}`);
}

const closeNav = () =>{
	if (navIsOpen){
		document.getElementById("mySideNav").style.width = "0";
		document.getElementById("navTextWrapper").style.display = "none";
		navIsOpen = false;
		console.log(`Nav is Open: ${navIsOpen}`);
	}
}

// Close navbar when clicking a navlink
$(".navLink").click(function(){
	closeNav();
});

// Price Estimate
let visitorsAmtEle = document.getElementById("visitorsAmt");
let numOfPagesEle = document.getElementById("numOfPages");
let finishEle = document.getElementById("finish");

let yearlyEle = document.getElementById("yearly");
let yearly = 0;
let monthlyEle = document.getElementById("monthly");
let monthly = 0;
let oneTimeEle = document.getElementById("oneTime");
let oneTime = 0;
let totalEle = document.getElementById("total");
let total = 0;

const updatePrice = () =>{
	// Update variables
	let visitorsAmt = visitorsAmtEle.value;
	let numOfPagesVal = numOfPagesEle.value;
	let numOfPages = parseInt(numOfPagesVal, 10);
	let finish = finishEle.value;
	
	// Echo to console
	console.log(`Visitors: ${visitorsAmt}`);
	console.log(`Pages: ${numOfPages}`);
	console.log(`Finish in: ${finish}`);
	
	// Switch to prices
	if(visitorsAmt == "OneToFifty"){
		yearly = 12;
		monthly = 3.99;
		oneTime = 5;
	}else if(visitorsAmt == "FiftyoneToTwoHundred"){
		yearly = 12;
		monthly = 6.99;
		oneTime = 10;
	}else if(visitorsAmt == "OverThreeHundred"){
		yearly = 12;
		monthly = 9.99;
		oneTime = 50;
	}
	
	// Switch finish
	if(finish == "30Plus"){
		oneTime = oneTime + (numOfPages * 5);
	}else if(finish == "14Days"){
		oneTime = oneTime + 30 + (numOfPages * 10);
	}else if(finish == "7Days"){
		oneTime = oneTime + 50 + (numOfPages * 11);
	}
	
	// If num of pages is less than or equal to zero, this will show.
	if(numOfPages <= 0){
		numOfPages = "Enter a valid number of pages."
	}
	
	// Price modifiers
	let useOwnDomain = document.getElementById("useOwnDomain").checked;
	let useOwnHosting = document.getElementById("useOwnHosting").checked;
	let monthlyMaintenance = document.getElementById("monthlyMaintenance").checked;
	
	if(useOwnDomain){console.log("useOwnDomain is true"); yearly = 0;}
	if(useOwnHosting){console.log("useOwnHosting is true"); monthly = 0;}
	if(monthlyMaintenance){console.log("monthlyMaintenance is true"); monthly = monthly + 12}
	//Round all numbers to two decimals
		yearly = Math.round(yearly * 100) / 100;
		monthly = Math.round(monthly * 100) / 100;
		oneTime = Math.round(oneTime * 100) / 100;
	
	//Total
		total = yearly + monthly + oneTime;
		total = Math.round(total * 100) / 100;
		
	
	
	
	// Post
	yearlyEle.innerHTML = yearly;
	monthlyEle.innerHTML = monthly;
	oneTimeEle.innerHTML = oneTime;
	if (yearly >= 0 && monthly >= 0 && oneTime > 0 && finish != "Finish it in..."){
		totalEle.innerHTML = total;
	}
}



// Actions
// Turn on indicator in navbar
let actionIsOn = false;
$(".actionLink").click(function(){
	if (actionIsOn == false){
		$(this).css("background-color", "lightgreen");
		$(this).css("color", "#fff");
		actionIsOn = true;
	}else if (actionIsOn){
		$(this).css("background-color", "#2b2b2b");
		$(this).css("color", "#818181");
		actionIsOn = false;
	}
});

// Action Functionality
// Night Mode
let nightModeOn = false;
const nightMode = () =>{
	if (nightModeOn == false){
		$("#nightMode").css("display", "block");
		$("body").css("background-color", "#000");
		$("body").css("color", "#fff");
		$("h2.sectionHeading").css("color", "#fff");
		nightModeOn = true;
		console.log(`Night Mode is On: ${nightModeOn}`);
	}else if (nightModeOn == true){
		$("#nightMode").css("display", "none");
		$("body").css("background-color", "#f4f4f4");
		$("body").css("color", "#000");
		$("h2.sectionHeading").css("color", "#333");
		nightModeOn = false;
		console.log(`Night Mode is On: ${nightModeOn}`);
	}
}

// Left Handed


// Cookies


// Close Cookie Banner
let cookieBannerIsClosed = false;
const closeCookieBanner = () =>{
	document.getElementById("cookieBanner").style.display = "none";
	cookieBannerIsClosed = true;
}

// Set cookie for cookie banner close
if (Cookies.get('name') == "cookieBannerIsClosed"){
	closeCookieBanner();
	console.log("Yummy! The cookie banner's, 'cookieBannerIsClosed', cookie was eaten!");
}else{
	console.log("'cookieBannerIsClosed' cookie is not set yet, here are all cookies: ");
	console.log(Cookies.get());
}