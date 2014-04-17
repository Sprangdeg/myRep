$("#getPriceButton").click(function(){
			getPrice();
			//alert($("#targetTime").val());		
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

function printEstimatedPrice(response){
var price = jQuery.parseJSON(response);

	if(price==0)
		$("#estimatedPrice").text("Not Possible");
	else
		$("#estimatedPrice").text("€ " + price);
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