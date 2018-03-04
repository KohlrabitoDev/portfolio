// Enable Tooltips Everywhere
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

// Make tooltips not scroll to top.
$('.tool-tip').click( function(e) {
	e.preventDefault();
});

// For sideNav, https://www.w3schools.com/howto/howto_js_sidenav.asp
const openNav = () =>{
	if ($(window).width() > 2000){
		document.getElementById("mySideNav").style.width = "750px";
	}else{
		document.getElementById("mySideNav").style.width = "250px";
	}
	document.getElementById("navTextWrapper").style.display = "block";
}

const closeNav = () =>{
	document.getElementById("mySideNav").style.width = "0";
	document.getElementById("navTextWrapper").style.display = "none";
}

// Price Calc
  let price = 0;
  let stored = {};

  const updatePrice = elm => {
    const id = elm.id;
    const selectedPrice = parseInt(
      Array.from(
        elm.children
      ).filter(x => x.selected)[0].dataset.price
    );

    price = 0;
    stored[id] = selectedPrice;

    Object.keys(stored).forEach(key => price += stored[key]);

    console.log(`Price: ${price}`);
	document.getElementById("price").innerHTML = price;
  };