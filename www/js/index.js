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
				alert("failed to load data");
			 }
		   });
	});
		
$("#createUser").click(function()
		{
			$("#content").load("createUser.html");
		});

function onBodyLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
	
}

function onDeviceReady() {
	$("#content").load("menu.html");
}

function splashScreen() {
	//navigator.splashscreen.show();
}

function connectToCharger() {
	var status = "Connected";
	var table = document.getElementById("infoTable");
	table.deleteRow(0);
	table.deleteRow(0);
	table.deleteRow(0);

	{
		var row0 = table.insertRow(0);
		var row1 = table.insertRow(1);
		var row2 = table.insertRow(2);

		var cell00 = row0.insertCell(0);
		var cell10 = row1.insertCell(0);
		var cell11 = row1.insertCell(1);
		var cell20 = row2.insertCell(0);
		var cell21 = row2.insertCell(1);

		cell00.innerHTML = "Home Charger 1:";
		cell10.innerHTML = "Vehicle:";
		cell11.innerHTML = status;
		cell20.innerHTML = "Charge:";
		cell21.innerHTML = "Not Available";

		document.getElementById("infoDiv").className = "infoConnected";
	}



}
