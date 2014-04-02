//When the program starts loads the menu and connects to the server
$(window).load(function() {
   $("#content").load("menu.html");
   connectToServer();
});

function connectToServer(){
	$.ajax({
		type: 'POST',
		//data: {name: nameValue},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/getStatus.php',
		timeout: 3000,
			 success: function(response){
				$("#infoLabel").html(response);			
			 },
			 error: function(){ printError("Failed to connect to server. <br> Try to reconnect."); }
		   });
}

function printError(error){
			$("#infoLabel").css("background-color", "#FF6666");
			$("#infoLabel").html(error);
}

function printResponse(response){
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



