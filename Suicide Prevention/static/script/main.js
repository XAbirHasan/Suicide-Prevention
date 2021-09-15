var Project_menu = document.getElementById("project_main_li");
var Project_sub_menu = document.getElementById("project_sub_li");

Project_menu.addEventListener("mouseover", Project_sub_menu_display, false);

Project_sub_menu.addEventListener("mouseover", Project_sub_menu_display, false);

Project_menu.addEventListener("mouseout", Project_sub_menu_hide, false);


function Project_sub_menu_display() {

	Project_sub_menu.setAttribute("style", "transform:translate(0%,0%);opacity:1;visibility: visible;");

}

function Project_sub_menu_hide() {
	
   
    Project_sub_menu.setAttribute("style", "transform:translate(0%,50%);opacity:0;visibility: hidden;");
	
}

// model sub li ..............................................................................
var model_menu = document.getElementById("model_main_li");
var model_sub_menu = document.getElementById("model_sub_li");

model_menu.addEventListener("mouseover", model_sub_menu_display, false);

model_sub_menu.addEventListener("mouseover", model_sub_menu_display, false);

model_menu.addEventListener("mouseout", model_sub_menu_hide, false);


function model_sub_menu_display() {

	model_sub_menu.setAttribute("style", "transform:translate(0%,0%);opacity:1;visibility: visible;");

}

function model_sub_menu_hide() {
	
   
    model_sub_menu.setAttribute("style", "transform:translate(0%,50%);opacity:0;visibility: hidden;");
	
}




//slider auto transition.............
var i;
var slides = document.getElementsByClassName("slide-page-only");

var total_slides = slides.length;
// console.log(total_slides);

var ini_slide = 1;
var intervar = 4000;
var slider_interval = setInterval(auto_slider_timer, intervar);


function auto_slider_timer() {

	var slider_val = ini_slide;
	
	ini_slide++;
	
	if(ini_slide > total_slides-1){
		ini_slide=0;
	}
	
	
	for(var i=0;i<total_slides;i++){
	
		if(i==slider_val){
			slides[i].style.opacity = 1;
			
		}
		else{
			slides[i].style.opacity = 0;
		}
		
	}
	
	
}












//social media buttons on load
var wha_soc = document.getElementById("wha-soc");
var ins_soc = document.getElementById("ins-soc");
var face_soc = document.getElementById("face-soc");
var twi_soc = document.getElementById("twi-soc");


window.onload = function()
{
	//adding the event listerner for Mozilla
	if(window.addEventListener){
		
		setTimeout(function() { //social media icon 1
			
			wha_soc.setAttribute("style", "transform:translate(0%,0%) rotate(0deg);transition:all 0.5s;");
			
		}, 400)
		
		setTimeout(function() { //social media icon 2
			
			ins_soc.setAttribute("style", "transform:translate(0%,0%) rotate(0deg);transition:all 0.65s;");
			
		}, 600)
		
		setTimeout(function() { //social media icon 3
			
			face_soc.setAttribute("style", "transform:translate(0%,0%) rotate(0deg);transition:all 0.8s;");
			
		}, 800)
		
		setTimeout(function() { //social media icon 4
			
			twi_soc.setAttribute("style", "transform:translate(0%,0%) rotate(0deg);transition:all 0.95s;");
			
		}, 1000)
		
	}
	
}