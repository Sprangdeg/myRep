<?php
function setManualCharge(){
	$db = getDatabase();	
	
	$car = getCarData($db);

	$targetCharge = batteryChargeWh($_POST['targetCharge'], $car['batteryCapacity']);
	$chargingRate = chargingRateToValue($_POST['chargingRate']);
	$chargeType = "Manual";
	//activity is for testing only
	$activity = "Charging";
	
	//response is a true or false type.
	$response = setChargerData($db, $targetCharge, $chargingRate, $chargeType, $activity);
	if($response)
		return createResponse($db);	
	else 
		return "Could not set requested charge";
}

function setTimedCharge(){
	
	return "Server: Not implemented";	
	
}

function setESBNCharge(){
	return "Server: Not implemented";
}

?>
