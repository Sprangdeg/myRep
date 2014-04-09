function loadStats()
{
    $.ajax({
        type: 'POST',
        data: {'request': 'statistics'},
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
	$("#statistics").html(response);	
}
