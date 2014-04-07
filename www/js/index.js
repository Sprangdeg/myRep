//When the program starts loads the menu and connects to the server
$(window).load(function() {
   $("#content").load("menu.html");
   connectToCharger();
});

function printError(error){
			$("#infoLabel").css("background-color", "#FF6666");
			$("#infoLabel").html(error);
}

function printResponse(response){
			$("#infoLabel").css("background-color", "lightgreen");
			$("#infoLabel").html(response);
}

		
function splashScreen() {
	//navigator.splashscreen.show();
}

$("#backToMain").click(function(){
			$("#content").load("menu.html");
		});

function connectToCharger(){
	$.ajax({
		type: 'POST',
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		data: {'type': "status"},
		timeout: 3000,
		success: function(response){
						printResponse(response);
			 },
		error: function(){ printError("Failed to connect to server. <br> Try and reconnect."); }
		   });
}

function removeBackButton(){
	//remove back button if the main menu is loaded
}

