// entity slider................................................
var religion_button = document.getElementById("religion_button");
var gender_button = document.getElementById("gender_button");
var age_button = document.getElementById("age_button");

var entity_button = document.getElementById("entity_button");
var entity_icon = document.getElementById("entity_icon");
var entity_graph_desc = document.getElementById("entity_graph_desc");


var entity_slider_holder = document.getElementById("entity_slider_holder");
var entity_slider_parent = document.getElementById("entity_slider_parent");




//Different entity of suicide...........................................................................................
var toggle_entity = 1;
entity_button.addEventListener("click", function() {
	
	// console.log(toggle_entity);
	hide_hand_pointer = 1;
	
	if(toggle_entity == 1){
		// console.log("yes");
		entity_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		entity_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_entity = toggle_entity * -1;
	
});

//entity slider making...........................
//religion.................
religion_button.addEventListener("click", function() {
	if(religion_button.className == "district-tab selected-district-tab"){
		if(entity_graph_desc.style.height == "0px" || entity_graph_desc.style.height == "" ){
			entity_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			entity_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		entity_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	entity_slider_parent.setAttribute("style", "transform:translate(0%,0%);transition:all 1s;");
	
	religion_button.classList.add("selected-district-tab");
	
	gender_button.classList.remove("selected-district-tab");
	age_button.classList.remove("selected-district-tab");
	
	
});

//gender.................
gender_button.addEventListener("click", function() {
	if(gender_button.className == "district-tab selected-district-tab"){
		if(entity_graph_desc.style.height == "0px" || entity_graph_desc.style.height == "" ){
			entity_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			entity_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		entity_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	entity_slider_parent.setAttribute("style", "transform:translate(-33.33%,0%);transition:all 1s;");
	
	gender_button.classList.add("selected-district-tab");
	
	religion_button.classList.remove("selected-district-tab");
	age_button.classList.remove("selected-district-tab");
	
	
});

//age.................
age_button.addEventListener("click", function() {
	if(age_button.className == "district-tab selected-district-tab"){
		if(entity_graph_desc.style.height == "0px" || entity_graph_desc.style.height == "" ){
			entity_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			entity_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		entity_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		entity_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	entity_slider_parent.setAttribute("style", "transform:translate(-66.66%,0%);transition:all 1s;");
	
	age_button.classList.add("selected-district-tab");
	
	religion_button.classList.remove("selected-district-tab");
	gender_button.classList.remove("selected-district-tab");
	
	
});























































