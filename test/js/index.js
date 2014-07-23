//When the program starts loads the menu and connects to the server
$(window).load(initateApplication());
		
function splashScreen() {
	//navigator.splashscreen.show();
}

$("#backButton").click(function(){
			removeBackButton();
			$("#content").load("menu.html");
			$("#infoLabel").load("status.html");
		});

function removeBackButton(){
	$("#backButton").hide();
}

function showBackButton(){
	$("#backButton").show();
}

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

function testServerResponse(response){
	$("#serverResponse").text(response);
}




