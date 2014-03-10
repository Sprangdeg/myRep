$("#createUser").click(function(){			
	alert("Creating user");
	$.ajax({
		type: 'POST',
		data: {	name: $("#nameValue").val(),
				charge: $("#chargeValue").val() },
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/createUser.php',
		timeout: 3000,
			 success: function(response){
				$("#infoLabel").html(response);			
			 },
			 error: function(){
				alert("failed to load data");
			 }
		   });
	});
	
$("#backToMain").click(function(){			
	$("#content").load("menu.html");
	});