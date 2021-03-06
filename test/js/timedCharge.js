$("#getPriceButton").click(function(){
			getPrice();		
		});

$("#confirmChargeButton").click(function(){
			setTimedCharge();
	
		});

function getPrice()
{
    $.ajax({
        type: 'POST',
        data: {	'request': 'getEstimatedPrice', 
        		'targetCharge': $("#targetChargeSlider").val(),
        		'targetTime': $("#targetTime").val() },
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
			 success: function(response){
				printEstimatedPrice(response);			
			 },
			 error: function(){
				printResponse("Failed to connect to server");
			 }  
    });
}

function setTimedCharge()
{
    if($("#estimatedPrice").val()=="" || $("#estimatedPrice").val()=="Not Possible"){
  		$("#infoLabel").load("error.html", function() {   
			$("#error").text("Error: Not possible to set charge");
		}
	);
    }  
    else{
    $.ajax({
        	type: 'POST',
        	data: {	'request': 'setTimedCharge', 
        			'targetCharge': $("#targetChargeSlider").val(),
        			'targetTime': $("#targetTime").val() },
			url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
			timeout: 3000,
				 success: function(response){
					printResponse(response);			
			 },
			 	error: function(){
					printError("Failed to connect to server");
				 }  
    	});
    }
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


function printEstimatedPrice(response){
var price = jQuery.parseJSON(response);

	if(price==0)
		$("#estimatedPrice").text("Not Possible");
	else
		$("#estimatedPrice").text(price);
}

function loadCharge(){
	var min = parseInt(getCurrentCharge()) + 1;
	$("#minLabel").text(min + "%");
	$("#targetChargeSlider").attr("min", min);
	
}

function getCurrentCharge(){
	return $("#currentCharge").text();	
}

function updateRangeLabel(){
	$("#rangeLabel").text($("#targetChargeSlider").val() + "%");
}