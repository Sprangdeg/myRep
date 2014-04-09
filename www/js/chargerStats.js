function loadStats()
{
    $.ajax({
        type: 'POST',
        data: {'request': 'statistics'},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
			 success: function(response){
				printResponse(response);			
			 },
			 error: function(){
				printResponse("Failed to connect to server");
			 }  
    });
}

function printResponse(response){
var serverResponse = jQuery.parseJSON(response);
var type = serverResponse.chargingType;
var rate = serverResponse.chargingRate;
var targetCharge = serverResponse.targetCharge;
var currentCharge = serverResponse.currentCharge;
var timeLeft = serverResponse.timeLeft;

var print = "Charge Type: " 		+ type 			+ "<br>" +
			"Charge Rate: " 		+ rate 			+ "<br>" +
			"Current Charge: " 		+ currentCharge + "%<br>" +
			"Target Charge: " 		+ targetCharge 	+ "%<br>" +		
			"Estimated Time Left: " + timeLeft		+ " min";

			$("#statistics").html(print);
}