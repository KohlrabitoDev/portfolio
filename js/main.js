// For sideNav, https://www.w3schools.com/howto/howto_js_sidenav.asp

const openNav = () =>{
	document.getElementById("mySideNav").style.width = "250px";
	document.getElementById("navTextWrapper").style.display = "block";
}

const closeNav = () =>{
	document.getElementById("mySideNav").style.width = "0";
	document.getElementById("navTextWrapper").style.display = "none";
}