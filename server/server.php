<?php
  include "./model/Statistics.php";
  include "./model/Status.php";
  include "./model/Database.php";
  include "./model/SetCharge.php";
  

	if(isset($_POST['request']))
	{
		$request = escape($_POST['request']);
		
		switch ($request) {
		case "status": $response = getStatus();
			break;
		case "statistics": $response = getStatistics();
			break;
		case "setManualCharge": $response = setManualCharge();
			break;
		case "setTimedCharge": $response = setTimedCharge();
			break;
		case "setESBNCharge": $response = setESBNCharge();
			break;
		default: $response = "Server: Undefined request";
		}
	}
	else
		$response = "Server: No request set";

	sendResponse($response);

// Sanitize input
function escape($post)
{
   return $post; 
}


function sendResponse($response){
	echo $response;
}
?>

