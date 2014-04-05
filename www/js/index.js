//When the program starts loads the menu and connects to the server
$(window).load(function() {
   $("#content").load("menu.html");
   connectToCharger();
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

function printError(error){
			$("#infoLabel").css("background-color", "#FF6666");
			$("#infoLabel").html(error);
}

function printResponse(response){
			$("#infoLabel").css("background-color", "lightgreen");
			$("#infoLabel").html(response);
}

		
$("#statsButton").click(function()
		{
			$("#content").load("chargerStats.html");
		});

$("#chargeButton").click(function()
		{
			$("#content").load("setCharge.html");
		});

function splashScreen() {
	//navigator.splashscreen.show();
}

$("#connectServer").click(function()
		{
		$.ajax({
		type: 'POST',
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
		success: function(response){
					printResponse(response);
			 },
		error: function(){ printError("Failed to connect to server. <br> Try and reconnect."); }
		   });
		});



