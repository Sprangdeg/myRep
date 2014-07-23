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
		url: 'http://aivu.se/bean/server.php',
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
	alert($("#estimatedPrice").text());
    if($("#estimatedPrice").text()=="" || $("#estimatedPrice").text()=="Not Possible"){
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
        			'price': $("#estimatedPrice").text(),
        			'targetTime': $("#targetTime").val() },
			url: 'http://aivu.se/bean/server.php',
			timeout: 3000,
				 success: function(response){
					printResponse(jQuery.parseJSON(response));	
					//testServerResponse(response);	
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
		alert("here");
		$("#infoLabel").load("chargingResponse.html", function() {   
 		$("#field1").text("Mode: " + response.chargingType);
 		$("#field2").text("Target Time: " + response.targetTime);
 		$("#field3").text("Target Charge: " + response.targetCharge + "%");
 		$("#field4").text("Estimated Price: €" + response.price); 
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
