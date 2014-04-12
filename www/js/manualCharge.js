$("#setCharge").click(function(){
			setCharge();		
		});

function setCharge()
{
    $.ajax({
        type: 'POST',
        data: {	'request': 'setManualCharge', 
        		'targetCharge': $("#targetChargeSlider").val(),
        		'chargeRate': $("#chargeRate").val() },
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
			"Target Charge: " 		+ targetCharge 	+ "%<br>" +		
			"Estimated Time Left: " + timeLeft		+ " min";

			$("#content").html(print);
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
