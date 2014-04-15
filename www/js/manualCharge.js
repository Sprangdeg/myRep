$("#setCharge").click(function(){
			setCharge();		
		});

function setCharge()
{
    $.ajax({
        type: 'POST',
        data: {	'request': 'setManualCharge', 
        		'targetCharge': $("#targetChargeSlider").val(),
        		'chargingRate': $("#chargeRate").val() },
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
			 success: function(response){
				printResponse(jQuery.parseJSON(response));
				//testServerResponse(response);		
			 },
			 error: function(){
				printResponse("Failed to connect to server");
			 }  
    });
}

function printResponse(response){

//The function is a "callback". Since the code would not find the tags in the newly loaded chargingResponse.html in time
//it has to be called again when it has been loaded.
$("#infoLabel").load("chargingResponse.html", function() {   
 		$("#type").text(response.chargingType);
 		$("#rate").text(response.chargingRate);
 		$("#targetCharge").text(response.targetCharge);
 		$("#timeLeft").text(convertTime(response.timeLeft)); 
		}
	);
}

function loadCharge(){
	
	$("#minLabel").text(getCurrentCharge() + "%");
	$("#targetChargeSlider").attr("min", getCurrentCharge());
	
}

function getCurrentCharge(){
	return $("#currentCharge").text();
	
}

function updateRangeLabel(){
	$("#rangeLabel").text($("#targetChargeSlider").val() + "%");
}
