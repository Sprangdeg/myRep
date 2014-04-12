$("#getPriceButton").click(function(){
			getPrice();		
		});

function getPrice()
{
    $.ajax({
        type: 'POST',
        data: {	'request': 'getPrice', 
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

function printEstimatedPrice(response){
var serverResponse = jQuery.parseJSON(response);
var price = serverResponse.chargingType;
	$("#estimatedPrice").text(price);

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