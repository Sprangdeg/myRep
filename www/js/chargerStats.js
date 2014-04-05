$("#backToMain").click(function()
		{
			$("#content").load("menu.html");
		});

function loadStats(divId)
{
    $.ajax({
        type: 'POST',
        data: {'type': 'statistics'},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
			 success: function(response){
				$('#'+divId).html(response);			
			 },
			 error: function(){
				$('#'+divId).html("Failed to connect to server");
			 }  
    });
}