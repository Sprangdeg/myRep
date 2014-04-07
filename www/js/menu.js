$("#statsButton").click(function()
		{
			$("#content").load("chargerStats.html");
		});

$("#chargeButton").click(function()
		{
			$("#content").load("setCharge.html");
		});
		
$("#connectServer").click(function()
		{
		$.ajax({
		type: 'POST',
		data: {'request': "status"},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
		success: function(response){
					printResponse(response);
			 },
		error: function(){ printError("Failed to connect to server. <br> Try and reconnect."); }
		   });
		});