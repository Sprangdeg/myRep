//When the program starts loads the menu and connects to the server

$(window).load(initateApplication());
		
function initateApplication(){
	loadStatus();
	loadMainMenu();
	removeBackButton();
}

function loadMainMenu() {
   $("#content").load("menu.html");  
}

function loadStatus(){
	$("#infoLabel").load("status.html");
}

function showBackButton(){
	$("#backButton").show();
}

function removeBackButton(){
	$("#backButton").hide();
}

$("#backButton").click(function(){
	loadStatus();
	loadMainMenu();
	removeBackButton();
});

function splashScreen() {
	//navigator.splashscreen.show();
}

function testServerResponse(response){
	$("#serverResponse").text(response);
}




