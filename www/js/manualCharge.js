$("#setCharge").click(function(){
			setCharge();		
			loadMainMenu();
		});


function setCharge()
{
	alert($("#chargeRate").val());
    $.ajax({
        type: 'POST',
        data: {	'type': 'setCharge', 
        		'targetCharge': $("#targetCharge").val(),
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
	$("#infoLabel").html(response);	
}
