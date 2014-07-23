function connectToCharger(){
	$.ajax({
		type: 'POST',
		url: 'http://aivu.se/bean/server.php',
		data: {'request': "status"},
		timeout: 3000,
		success: function(response){
				printResponse(jQuery.parseJSON(response));				
			 },
		error: function(){ 
				printError("Failed to connect to server. <br> Try and reconnect."); 
				}
		   });
}

function printResponse(response){
	
		if(response.activity=="Full"){
			$("#statusInfo").css("background-color", "lightgreen");
		}
		
		if(response.activity=="Charging"){
			$("#statusInfo").css("background-color", "orange");
		}	
		
		if(response.activity=="Finished"){
			$("#statusInfo").css("background-color", "yellow");
		}	
					
			$("#activity").text(response.activity);
			$("#model").text(response.model);
			$("#regNumber").text(response.regNumber);
			$("#chargeType").text(response.chargingType);
			$("#currentCharge").text(response.currentCharge);
}

function printError(error){
			$("#infoLabel").css("background-color", "#FF6666");
			$("#infoLabel").html(error);
}
