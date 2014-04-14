//When the program starts loads the menu and connects to the server
$(window).load(initateApplication());
		
function splashScreen() {
	//navigator.splashscreen.show();
}

$("#backToMain").click(function(){
			$("#content").load("menu.html");
			$("#infoLabel").load("status.html");
		});

function removeBackButton(){
	//remove back button if the main menu is loaded
}

function initateApplication(){
	loadStatus();
	loadMainMenu();
}

function loadMainMenu() {
   $("#content").load("menu.html");
}

function loadStatus(){
	$("#infoLabel").load("status.html");
}

function testServerResponse(response){
	$("#serverResponse").text(response);
}




