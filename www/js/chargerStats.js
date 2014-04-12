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
$("#type").text(serverResponse.chargingType);
$("#rate").text(serverResponse.chargingRate);
$("#targetCharge").text(serverResponse.targetCharge);
$("#timeLeft").text(serverResponse.timeLeft);
}