<?php
//Get the chargers current status

function getStatus(){
	$db = getDatabase();
    $car = getCarData($db);
    
	//TRUE
	if($car['connected'])
		$response = createResponse($db);
	//FALSE
   else{
        $response =  " Vehicle: Not connected <br>";
    }
    return $response;
}


?>
