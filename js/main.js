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
	if ($(window).width() > 2000){
		document.getElementById("mySideNav").style.width = "750px";
	}else{
		document.getElementById("mySideNav").style.width = "250px";
	}
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



// Close Cookie Banner
const closeCookieBanner = () =>{
	document.getElementById("cookieBanner").style.display = "none";
}