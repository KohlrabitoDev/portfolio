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