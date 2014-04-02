$("#connectToServer").click(function(){			
	$.ajax({
		type: 'POST',
		//data: {name: nameValue},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/getStatus.php',
		timeout: 3000,
			 success: function(response){
				$("#infoLabel").html(response);			
			 },
			 error: function(){
				$("#infoLabel").html("Failed to connect to server");
			 }
		   });
	});
		
$("#backToMain").click(function()
		{
			$("#content").load("menu.html");
		});

