<?php
//Get the chargers current status

function getStatus(){
	$db = getDatabase();
	
    $carData = getCarData($db);
    $chargerData = getChargerData($db);
    $connected = $carData['connected'];
    $answer = '';
    
	//TRUE
	if($carData['connected']){
        $answer.= "Vehicle: Connected" . "<br>";
        $answer.= "Charge: " . 100*$carData['batteryCharge']/$carData['batteryCapacity'] . "%<br>";
        $answer.= "Mode: " . $chargerData['type'];
    }
	//FALSE
   else{
        $answer.=  " Vehicle: Not connected <br>";
        $answer.= "Charge: unknown";
    }
    return $answer;
}
?>
