// forecast slider................................................
var time_button = document.getElementById("time_button");
var month_button = document.getElementById("month_button");
var weather_button = document.getElementById("weather_button");

var forecast_button = document.getElementById("forecast_button");
var forecast_icon = document.getElementById("forecast_icon");
var forecast_graph_desc = document.getElementById("forecast_graph_desc");


var forecast_slider_holder = document.getElementById("forecast_slider_holder");
var forecast_slider_parent = document.getElementById("forecast_slider_parent");




//Different forecast of suicide...........................................................................................
var toggle_forecast = 1;
forecast_button.addEventListener("click", function() {
	
	// console.log(toggle_forecast);
	hide_hand_pointer = 1;
	
	if(toggle_forecast == 1){
		// console.log("yes");
		forecast_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		forecast_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_forecast = toggle_forecast * -1;
	
});

//forecast slider making...........................
//time.................
time_button.addEventListener("click", function() {
	if(time_button.className == "district-tab selected-district-tab"){
		if(forecast_graph_desc.style.height == "0px" || forecast_graph_desc.style.height == "" ){
			forecast_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			forecast_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		forecast_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	forecast_slider_parent.setAttribute("style", "transform:translate(0%,0%);transition:all 1s;");
	
	time_button.classList.add("selected-district-tab");
	
	month_button.classList.remove("selected-district-tab");
	weather_button.classList.remove("selected-district-tab");
	
	
});

//gender.................
month_button.addEventListener("click", function() {
	if(month_button.className == "district-tab selected-district-tab"){
		if(forecast_graph_desc.style.height == "0px" || forecast_graph_desc.style.height == "" ){
			forecast_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			forecast_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		forecast_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	forecast_slider_parent.setAttribute("style", "transform:translate(-33.33%,0%);transition:all 1s;");
	
	month_button.classList.add("selected-district-tab");
	
	time_button.classList.remove("selected-district-tab");
	weather_button.classList.remove("selected-district-tab");
	
	
});

//age.................
weather_button.addEventListener("click", function() {
	if(weather_button.className == "district-tab selected-district-tab"){
		if(forecast_graph_desc.style.height == "0px" || forecast_graph_desc.style.height == "" ){
			forecast_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			forecast_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		forecast_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		forecast_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	forecast_slider_parent.setAttribute("style", "transform:translate(-66.66%,0%);transition:all 1s;");
	
	weather_button.classList.add("selected-district-tab");
	
	time_button.classList.remove("selected-district-tab");
	month_button.classList.remove("selected-district-tab");
	
	
});























































