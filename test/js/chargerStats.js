function loadStats()
{
    $.ajax({
        type: 'POST',
        data: {'request': 'statistics'},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
			 success: function(response){
				printResponse(jQuery.parseJSON(response));			
			 },
			 error: function(){
				printResponse("Failed to connect to server");
			 }  
    });
}

function printResponse(response){
$("#type").text(response.chargingType);
$("#rate").text(response.chargingRate);
$("#targetCharge").text(response.targetCharge);
$("#timeLeft").text(convertTime(response.timeLeft));
}

function convertTime(timeLeft){
	var hours = Math.floor(timeLeft);
	var minutes = Math.round(60*(timeLeft-hours));
	
	if(hours>=1)
		return hours + "h " + minutes + "min";
	else 
		return minutes + "min";;
}
