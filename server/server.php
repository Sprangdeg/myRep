<?php
  include "./model/Statistics.php";
  include "./model/Status.php";
  include "./model/Database.php";
  include "./model/SetCharge.php";
  include "./model/Error.php";
  include "./model/Conversion.php";
  include "./model/Response.php";
  include "./model/GetPrice.php";
  
  /* Testing purpose. Call function here
  getEstimatedPrice();
  */
  
	if(isset($_POST['request']))
	{
		$request = escape($_POST['request']);
		
		switch ($request) {
		case "status": 			$response = getStatus();
			break;
		case "statistics": 		$response = getStatistics();
			break;
		case "setManualCharge": $response = setManualCharge();
			break;
		case "getEstimatedPrice": 		$response = getEstimatedPrice();
			break;
		case "setTimedCharge": 	$response = setTimedCharge();
			break;
		case "setESBNCharge": 	$response = setESBNCharge();
			break;
		default: $response = "Server";
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
	if($response=="Server")
	echo $response;
	else
	echo json_encode($response);
}

?>

