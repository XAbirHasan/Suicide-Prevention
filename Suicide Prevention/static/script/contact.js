
// for project page.......................
var moving_back = document.getElementById("moving_back_img");

var move = setInterval(MoveBackGround, 10000);

var count = 0;


setTimeout(MoveBackGround, 1000);

function MoveBackGround() {
	
	if(count%2==0){
		console.log("0");
		moving_back.setAttribute("style", "transform: scale(1.2)")
	}
	else{
		console.log("1");
		moving_back.setAttribute("style", "transform: scale(1)")
	}
	
	count++;
	
}



// ............... nav bar menu 
/* var menu_nav = document.getElementById("menu_nav");
var navbar_2 = document.getElementById("navbar_2");

menu_nav.addEventListener("click", function() {
  
	const style = window.getComputedStyle(navbar_2);
	const nav_display = style.display;
	// console.log(displays);
	
	if(nav_display == "none"){
		navbar_2.setAttribute("style", "display:flex");
		// console.log("ok");
	}
	else{
		
		navbar_2.setAttribute("style", "display:none");
		// console.log("ok");
	}
}); */
// ............... nav bar menu 
































