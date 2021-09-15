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

