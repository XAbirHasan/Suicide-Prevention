//hand pointer poping
var hand_pointer = document.getElementById("hand_pointer");
var hide_hand_pointer = 0;

// hand_pointer_suggestion();

setTimeout(function(){
	// console.log(hide_hand_pointer);
	if(hide_hand_pointer == 0){
		
		hand_pointer.setAttribute("style", "visibility:visible;opacity:1;transition:all 1s;");
		// hide_hand_pointer = 1;
		
		setTimeout(function(){
			hand_pointer.setAttribute("style", "opacity:0;transition:all 1s;");
			setTimeout(function(){
				hand_pointer.setAttribute("style", "visibility:hidden;");
			}, 1000);
			hand_pointer_suggestion();
			
		}, 3500);
		
	}
}, 5000);


function hand_pointer_suggestion(){
	
	setInterval(function(){
		
		// console.log(hide_hand_pointer);
		if(hide_hand_pointer == 0){
			
			hand_pointer.setAttribute("style", "visibility:visible;opacity:1;transition:all 1s;");
			// hide_hand_pointer = 1;
			
			setTimeout(function(){
				hand_pointer.setAttribute("style", "opacity:0;transition:all 1s;");
				setTimeout(function(){
					hand_pointer.setAttribute("style", "visibility:hidden;");
				}, 1000);
			}, 3500);
			
		}
	}, 10000);
}



// var religion_button = document.getElementById("religion_button");
// var religion_icon = document.getElementById("religion_icon");

  
  
//slider controler
// slider.................................................................................................................

var slider_main = document.getElementById("slider_parent");

var user_status_button = document.getElementById("user_status_button");
var bangla_article_button = document.getElementById("bangla_article_button");
var english_article_button = document.getElementById("english_article_button");




//word cloud button................................................
var image_slider_holder = document.getElementById("image_slider_holder");

var word_cloud_text = document.getElementById("word_cloud_text");
var word_cloud_icon = document.getElementById("word_cloud_icon");

var word_cloud_tab_holder = document.getElementById("word_cloud_tab_holder");



//graph buttons................................................................
var reason_button = document.getElementById("reason_button");
var reason_icon = document.getElementById("reason_icon");
var reason_graph_desc = document.getElementById("reason_graph_desc");
var reason_graph = document.getElementById("reason_graph");

var method_button = document.getElementById("method_button");
var method_icon = document.getElementById("method_icon");
var method_graph_desc = document.getElementById("method_graph_desc");
var method_graph = document.getElementById("method_graph");

var division_button = document.getElementById("division_button");
var division_icon = document.getElementById("division_icon");
var division_graph_desc = document.getElementById("division_graph_desc");
var division_graph = document.getElementById("division_graph");

var district_button = document.getElementById("district_button");
var district_icon = document.getElementById("district_icon");
var district_graph_desc = document.getElementById("district_graph_desc");
var district_graph = document.getElementById("district_graph");

var profession_button = document.getElementById("profession_button");
var profession_icon = document.getElementById("profession_icon");
var profession_graph_desc = document.getElementById("profession_graph_desc");
var profession_graph = document.getElementById("profession_graph");

var economy_button = document.getElementById("economy_button");
var economy_icon = document.getElementById("economy_icon");
var economy_graph_desc = document.getElementById("economy_graph_desc");
var economy_graph = document.getElementById("economy_graph");

var rsn_gen_button = document.getElementById("rsn_gen_button");
var rsn_gen_icon = document.getElementById("rsn_gen_icon");
var rsn_gen_graph_desc = document.getElementById("rsn_gen_graph_desc");
var rsn_gen_graph = document.getElementById("rsn_gen_graph");

var met_gen_button = document.getElementById("met_gen_button");
var met_gen_icon = document.getElementById("met_gen_icon");
var met_gen_graph_desc = document.getElementById("met_gen_graph_desc");
var met_gen_graph = document.getElementById("met_gen_graph");

var rsn_age_button = document.getElementById("rsn_age_button");
var rsn_age_icon = document.getElementById("rsn_age_icon");
var rsn_age_graph_desc = document.getElementById("rsn_age_graph_desc");
var rsn_age_graph = document.getElementById("rsn_age_graph");

var eco_age_button = document.getElementById("eco_age_button");
var eco_age_icon = document.getElementById("eco_age_icon");
var eco_age_graph_desc = document.getElementById("eco_age_graph_desc");
var eco_age_graph = document.getElementById("eco_age_graph");


var cluster_button = document.getElementById("cluster_button");
var cluster_icon = document.getElementById("cluster_icon");
var cluster_graph_desc = document.getElementById("cluster_graph_desc");
var cluster_graph = document.getElementById("cluster_graph");


// district slider................................................
var dhaka_button = document.getElementById("dhaka_button");
var rajshahi_button = document.getElementById("rajshahi_button");
var khulna_button = document.getElementById("khulna_button");
var barisal_button = document.getElementById("barisal_button");
var chattagram_button = document.getElementById("chattagram_button");
var mymensingh_button = document.getElementById("mymensingh_button");
var rangpur_button = document.getElementById("rangpur_button");
var sylhet_button = document.getElementById("sylhet_button");

var district_slider_holder = document.getElementById("district_slider_holder");
var district_slider_parent = document.getElementById("district_slider_parent");


// width of the word cloud image.....................
var wrd_cloud_fixed_hight = document.getElementById("word_cloud_img_1").offsetHeight;
var wrd_cld_hgt = (wrd_cloud_fixed_hight + 14).toString()+"px";


var wcloud_texts = document.getElementsByClassName("word-cloud-des");
var total_wcloud_des = wcloud_texts.length;
var wCloudDes_maxHeight = 0;
// console.log(total_wcloud_des);

//sigle graph text height..................................
var sinGraph_textHeights = document.getElementsByClassName("single-graph-des");
var total_sinGraphs = sinGraph_textHeights.length;
var sinGraphs_maxHeight = 0;
// console.log(total_sinGraphs);

//multi graph text height..................................
var mulGraph_textHeights = document.getElementsByClassName("multi-graph-des");
var total_mulGraphs = mulGraph_textHeights.length;
var mulGraphs_maxHeight = 0;
// console.log(total_mulGraphs);

//graph height
var graph_height = "550px";
var graph_height_dis = "592px";
// console.log(graph_height_dis);


//graph count..................................



//ready window...................................................
window.onload = function()
{
	if(window.innerWidth < 768){
		// console.log("mobile");
		graph_height = "100%";
		graph_height_dis = "100%";
		
		
		for(var i=0;i<wcloud_texts.length;i++){
			
			if(wCloudDes_maxHeight < wcloud_texts[i].offsetHeight){
				wCloudDes_maxHeight = wcloud_texts[i].offsetHeight;
			}
			
		}
		wrd_cld_hgt = (wrd_cloud_fixed_hight + 14 + wCloudDes_maxHeight + 7).toString()+"px";
		// console.log(wCloudDes_maxHeight);
	}
	else{
		// console.log("pc");
		graph_height = "550px";
		graph_height_dis = "592px";
		wrd_cld_hgt = (wrd_cloud_fixed_hight + 14).toString()+"px";
	}
	
	//adding the event listerner for Mozilla
	if(window.addEventListener){
		
		// dhaka_text_height
		
		
		reason_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		method_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		division_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		district_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		profession_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		entity_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		forecast_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		economy_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		
		rsn_gen_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		met_gen_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		rsn_age_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		eco_age_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		
		cluster_graph_desc.setAttribute("style", "transition:all 0s;height:0px;");
		
		// var svg_tags = document.getElementsByTagName("rect");
		// console.log(svg_tags.length);
	}
	
}

window.onresize = function(){
	
	// console.log("window resized");
	
	if(window.innerWidth < 768){
		// console.log("mobile");
		graph_height = "100%";
		graph_height_dis = "100%";
		wrd_cld_hgt = "100%";
	}
	else{
		// console.log("pc");
		graph_height = "550px";
		graph_height_dis = "592px";
		wrd_cld_hgt = (wrd_cloud_fixed_hight + 14).toString()+"px";
	}
}


//word cloud slide.........................................................

user_status_button.addEventListener("click", function() {
	
	//checking if this tab is selected or not
	// console.log(user_status_button.className);
	if(user_status_button.className == "word-cloud-tab selected-word-tab"){
		if(image_slider_holder.style.height == "0px" || image_slider_holder.style.height == "" ){
			image_slider_holder.setAttribute("style", "height:"+wrd_cld_hgt+";transition:all 1s");
			word_cloud_tab_holder.setAttribute("style", "height:40px;transition:all 1s;");
			word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			image_slider_holder.setAttribute("style", "height:0px;transition:all 1s;");
			word_cloud_tab_holder.setAttribute("style", "height:0px;transition:all 1s;");
			word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
	}
	else{
		image_slider_holder.setAttribute("style", "height:"+wrd_cld_hgt+";transition:all 1s");
		word_cloud_tab_holder.setAttribute("style", "height:40px;transition:all 1s;");
		word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	slider_main.setAttribute("style", "transform:translate(0%,0%);transition:all 1s;");
	user_status_button.classList.add("selected-word-tab");
	bangla_article_button.classList.remove("selected-word-tab");
	english_article_button.classList.remove("selected-word-tab");
	
});

bangla_article_button.addEventListener("click", function() {
	
	if(bangla_article_button.className == "word-cloud-tab selected-word-tab"){
		if(image_slider_holder.style.height == "0px" || image_slider_holder.style.height == "" ){
			image_slider_holder.setAttribute("style", "height:"+wrd_cld_hgt+";transition:all 1s");
			word_cloud_tab_holder.setAttribute("style", "height:40px;transition:all 1s;");
			word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			image_slider_holder.setAttribute("style", "height:0px;transition:all 1s;");
			word_cloud_tab_holder.setAttribute("style", "height:0px;transition:all 1s;");
			word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
	}
	else{
		image_slider_holder.setAttribute("style", "height:"+wrd_cld_hgt+";transition:all 1s");
		word_cloud_tab_holder.setAttribute("style", "height:40px;transition:all 1s;");
		word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	slider_main.setAttribute("style", "transform:translate(-33.3333%,0%);transition:all 1s;");
	bangla_article_button.classList.add("selected-word-tab");
	user_status_button.classList.remove("selected-word-tab");
	english_article_button.classList.remove("selected-word-tab");
	
});

english_article_button.addEventListener("click", function() {
	
	if(english_article_button.className == "word-cloud-tab selected-word-tab"){
		if(image_slider_holder.style.height == "0px" || image_slider_holder.style.height == "" ){
			image_slider_holder.setAttribute("style", "height:"+wrd_cld_hgt+";transition:all 1s");
			word_cloud_tab_holder.setAttribute("style", "height:40px;transition:all 1s;");
			word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			image_slider_holder.setAttribute("style", "height:0px;transition:all 1s;");
			word_cloud_tab_holder.setAttribute("style", "height:0px;transition:all 1s;");
			word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
	}
	else{
		image_slider_holder.setAttribute("style", "height:"+wrd_cld_hgt+";transition:all 1s");
		word_cloud_tab_holder.setAttribute("style", "height:40px;transition:all 1s;");
		word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	slider_main.setAttribute("style", "transform:translate(-66.6666%,0%);transition:all 1s;");
	english_article_button.classList.add("selected-word-tab");
	bangla_article_button.classList.remove("selected-word-tab");
	user_status_button.classList.remove("selected-word-tab");
	
});



//word cloud.............................................................................................................
word_cloud_button.addEventListener("click", function() {
	
	hide_hand_pointer = 1;
	
	console.log(image_slider_holder.style.height);
	if(image_slider_holder.style.height == "0px" || image_slider_holder.style.height == "" ){
		
		image_slider_holder.setAttribute("style", "height:"+wrd_cld_hgt+";transition:all 1s");
		word_cloud_tab_holder.setAttribute("style", "height:40px;transition:all 1s;");
		word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		
	}
	else{
		image_slider_holder.setAttribute("style", "height:0px;transition:all 1s;");
		word_cloud_tab_holder.setAttribute("style", "height:0px;transition:all 1s;");
		word_cloud_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
	}
});



//reason graph button setup...........................................................................................
var toggle_reason = 1;
reason_button.addEventListener("click", function() {
	
	hide_hand_pointer = 1;
	// console.log(graph_height);
	if(toggle_reason == 1){
		// console.log("yes");
		reason_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		reason_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		reason_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		reason_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_reason = toggle_reason * -1;
	
});


//method graph button setup...........................................................................................
var toggle_method = 1;
method_button.addEventListener("click", function() {
	
	// console.log("method button works");
	hide_hand_pointer = 1;
	
	if(toggle_method == 1){
		// console.log("yes");
		method_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		method_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		method_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		method_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_method = toggle_method * -1;
	
});


//Different Area(Division) of suicide...........................................................................................
var toggle_division = 1;
division_button.addEventListener("click", function() {
	
	// console.log("division button works");
	hide_hand_pointer = 1;
	
	if(toggle_division == 1){
		// console.log("yes");
		division_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		division_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		division_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		division_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_division = toggle_division * -1;
	
});


//Different District of suicide...........................................................................................
var toggle_district = 1;
district_button.addEventListener("click", function() {
	
	// console.log(toggle_district);
	hide_hand_pointer = 1;
	
	if(toggle_district == 1){
		// console.log("yes");
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		district_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_district = toggle_district * -1;
	
});

//district slider making...........................
//dhaka.................
dhaka_button.addEventListener("click", function() {
	if(dhaka_button.className == "district-tab selected-district-tab"){
		if(district_graph_desc.style.height == "0px" || district_graph_desc.style.height == "" ){
			district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			district_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	district_slider_parent.setAttribute("style", "transform:translate(0%,0%);transition:all 1s;");
	
	dhaka_button.classList.add("selected-district-tab");
	
	rajshahi_button.classList.remove("selected-district-tab");
	khulna_button.classList.remove("selected-district-tab");
	barisal_button.classList.remove("selected-district-tab");
	chattagram_button.classList.remove("selected-district-tab");
	mymensingh_button.classList.remove("selected-district-tab");
	rangpur_button.classList.remove("selected-district-tab");
	sylhet_button.classList.remove("selected-district-tab");
	
});

//Rajshahi.................
rajshahi_button.addEventListener("click", function() {
	if(rajshahi_button.className == "district-tab selected-district-tab"){
		if(district_graph_desc.style.height == "0px" || district_graph_desc.style.height == "" ){
			district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			district_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	
	district_slider_parent.setAttribute("style", "transform:translate(-12.5%,0%);transition:all 1s;");
	
	rajshahi_button.classList.add("selected-district-tab");
	
	dhaka_button.classList.remove("selected-district-tab");
	khulna_button.classList.remove("selected-district-tab");
	barisal_button.classList.remove("selected-district-tab");
	chattagram_button.classList.remove("selected-district-tab");
	mymensingh_button.classList.remove("selected-district-tab");
	rangpur_button.classList.remove("selected-district-tab");
	sylhet_button.classList.remove("selected-district-tab");
	
});

//Khulna.................
khulna_button.addEventListener("click", function() {
	if(khulna_button.className == "district-tab selected-district-tab"){
		if(district_graph_desc.style.height == "0px" || district_graph_desc.style.height == "" ){
			district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			district_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	// console.log("khulna button");
	district_slider_parent.setAttribute("style", "transform:translate(-25%,0%);transition:all 1s;");
	
	khulna_button.classList.add("selected-district-tab");
	
	dhaka_button.classList.remove("selected-district-tab");
	rajshahi_button.classList.remove("selected-district-tab");
	barisal_button.classList.remove("selected-district-tab");
	chattagram_button.classList.remove("selected-district-tab");
	mymensingh_button.classList.remove("selected-district-tab");
	rangpur_button.classList.remove("selected-district-tab");
	sylhet_button.classList.remove("selected-district-tab");
	
});

//Barisal.................
barisal_button.addEventListener("click", function() {
	if(barisal_button.className == "district-tab selected-district-tab"){
		if(district_graph_desc.style.height == "0px" || district_graph_desc.style.height == "" ){
			district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			district_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	district_slider_parent.setAttribute("style", "transform:translate(-37.5%,0%);transition:all 1s;");
	
	barisal_button.classList.add("selected-district-tab");
	
	dhaka_button.classList.remove("selected-district-tab");
	rajshahi_button.classList.remove("selected-district-tab");
	khulna_button.classList.remove("selected-district-tab");
	chattagram_button.classList.remove("selected-district-tab");
	mymensingh_button.classList.remove("selected-district-tab");
	rangpur_button.classList.remove("selected-district-tab");
	sylhet_button.classList.remove("selected-district-tab");
	
});

//Chattagram.................
chattagram_button.addEventListener("click", function() {
	if(chattagram_button.className == "district-tab selected-district-tab"){
		if(district_graph_desc.style.height == "0px" || district_graph_desc.style.height == "" ){
			district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			district_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	district_slider_parent.setAttribute("style", "transform:translate(-50%,0%);transition:all 1s;");
	
	chattagram_button.classList.add("selected-district-tab");
	
	dhaka_button.classList.remove("selected-district-tab");
	rajshahi_button.classList.remove("selected-district-tab");
	khulna_button.classList.remove("selected-district-tab");
	barisal_button.classList.remove("selected-district-tab");
	mymensingh_button.classList.remove("selected-district-tab");
	rangpur_button.classList.remove("selected-district-tab");
	sylhet_button.classList.remove("selected-district-tab");
	
});

//Mymensingh.................
mymensingh_button.addEventListener("click", function() {
	if(mymensingh_button.className == "district-tab selected-district-tab"){
		if(district_graph_desc.style.height == "0px" || district_graph_desc.style.height == "" ){
			district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			district_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	district_slider_parent.setAttribute("style", "transform:translate(-62.5%,0%);transition:all 1s;");
	
	mymensingh_button.classList.add("selected-district-tab");
	
	dhaka_button.classList.remove("selected-district-tab");
	rajshahi_button.classList.remove("selected-district-tab");
	khulna_button.classList.remove("selected-district-tab");
	barisal_button.classList.remove("selected-district-tab");
	chattagram_button.classList.remove("selected-district-tab");
	rangpur_button.classList.remove("selected-district-tab");
	sylhet_button.classList.remove("selected-district-tab");
	
});

//Rangpur.................
rangpur_button.addEventListener("click", function() {
	if(rangpur_button.className == "district-tab selected-district-tab"){
		if(district_graph_desc.style.height == "0px" || district_graph_desc.style.height == "" ){
			district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			district_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	district_slider_parent.setAttribute("style", "transform:translate(-75%,0%);transition:all 1s;");
	
	rangpur_button.classList.add("selected-district-tab");
	
	dhaka_button.classList.remove("selected-district-tab");
	rajshahi_button.classList.remove("selected-district-tab");
	khulna_button.classList.remove("selected-district-tab");
	barisal_button.classList.remove("selected-district-tab");
	chattagram_button.classList.remove("selected-district-tab");
	mymensingh_button.classList.remove("selected-district-tab");
	sylhet_button.classList.remove("selected-district-tab");
	
});

//Sylhet.................
sylhet_button.addEventListener("click", function() {
	if(sylhet_button.className == "district-tab selected-district-tab"){
		if(district_graph_desc.style.height == "0px" || district_graph_desc.style.height == "" ){
			district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
		}
		else{
			district_graph_desc.setAttribute("style", "height:0px;transition:all 1s;");
			district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");
		}
		toggle_district = toggle_district * -1;
	}
	else{
		district_graph_desc.setAttribute("style", "height:"+graph_height_dis+";transition:all 1s;");
		district_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	district_slider_parent.setAttribute("style", "transform:translate(-87.5%,0%);transition:all 1s;");
	
	sylhet_button.classList.add("selected-district-tab");
	
	dhaka_button.classList.remove("selected-district-tab");
	rajshahi_button.classList.remove("selected-district-tab");
	khulna_button.classList.remove("selected-district-tab");
	barisal_button.classList.remove("selected-district-tab");
	chattagram_button.classList.remove("selected-district-tab");
	mymensingh_button.classList.remove("selected-district-tab");
	rangpur_button.classList.remove("selected-district-tab");
	
});




//Number of suicide case vs Profession group...........................................................................................
var toggle_profession = 1;
profession_button.addEventListener("click", function() {
	
	// console.log(toggle_profession);
	hide_hand_pointer = 1;
	
	if(toggle_profession == 1){
		// console.log("yes");
		profession_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		profession_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		profession_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		profession_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_profession = toggle_profession * -1;
	
});


//Number of suicide case vs Economy group...........................................................................................
var toggle_economy = 1;
economy_button.addEventListener("click", function() {
	
	// console.log(toggle_economy);
	hide_hand_pointer = 1;
	
	if(toggle_economy == 1){
		// console.log("yes");
		economy_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		economy_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		economy_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		economy_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_economy = toggle_economy * -1;
	
});


//comparison graph .....................................

// Reason vs Gender.............
var toggle_rsn_gen = 1;
rsn_gen_button.addEventListener("click", function() {
	
	// console.log(toggle_rsn_gen);
	hide_hand_pointer = 1;
	
	if(toggle_rsn_gen == 1){
		// console.log("yes");
		rsn_gen_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		rsn_gen_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		rsn_gen_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		rsn_gen_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_rsn_gen = toggle_rsn_gen * -1;
	
});

// Method vs Gender.............
var toggle_met_gen = 1;
met_gen_button.addEventListener("click", function() {
	
	// console.log(toggle_met_gen);
	hide_hand_pointer = 1;
	
	if(toggle_met_gen == 1){
		// console.log("yes");
		met_gen_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		met_gen_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		met_gen_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		met_gen_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_met_gen = toggle_met_gen * -1;
	
});


// Reason Age.............
var toggle_rsn_age = 1;
rsn_age_button.addEventListener("click", function() {
	
	// console.log(toggle_rsn_age);
	hide_hand_pointer = 1;
	
	if(toggle_rsn_age == 1){
		// console.log("yes");
		rsn_age_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		rsn_age_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		rsn_age_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		rsn_age_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_rsn_age = toggle_rsn_age * -1;
	
});


// Economy Age.............
var toggle_eco_age = 1;
eco_age_button.addEventListener("click", function() {
	
	// console.log(toggle_eco_age);
	hide_hand_pointer = 1;
	
	if(toggle_eco_age == 1){
		// console.log("yes");
		eco_age_graph_desc.setAttribute("style", "height:"+graph_height+";transition:all 1s;");
		eco_age_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		eco_age_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		eco_age_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_eco_age = toggle_eco_age * -1;
	
});


























//Cluster ...........................................................................................
var toggle_cluster = 1;
cluster_button.addEventListener("click", function() {
	
	// console.log(toggle_cluster);
	hide_hand_pointer = 1;
	
	if(toggle_cluster == 1){
		// console.log("yes");
		cluster_graph_desc.setAttribute("style", "height:"+(clusgrp_height+14)+"px;transition:all 1s;");
		cluster_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(0deg);");
	}
	else{
		// console.log("no");
		cluster_graph_desc.setAttribute("style", "transition:all 1s;height:0px;");
		cluster_icon.setAttribute("style", "transition:all 0.5s;transform:rotate(180deg);");		
	}
	
	toggle_cluster = toggle_cluster * -1;
	
});




// var content = document.getElementById('cluster_graph');
// content.setAttribute("style", "border:1px solid red");	
// content.setAttribute("style", "overflow:scroll");	
	
// var zX = 1;
// window.addEventListener('wheel', function (e) {
    // var dir;
    // if (!e.ctrlKey) {
        // return;
    // }
	
    // dir = (e.z > 0) ? 0.1 : -0.1;
    // zX += dir;
    
	// console.log(zX);
	// if(zX >= 1){
		
		// console.log(zX);
		// content.style.transform = 'scale(' + zX + ')';
	// }
	
    

    // e.preventDefault();
    // return;
// }, { passive: false });

// document.addEventListener('wheel', function(e) {
    // e.preventDefault();

	
// }, { passive: false });
























