<?php
function setManualCharge(){

	$targetCharge = $_POST['targetCharge'];
	$chargeRate = getChargeRate();
	$chargeType = "Manual";
	
	$db = getDatabase();	
	
	$answer = setChargerData($db, $targetCharge, $chargeRate, $chargeType);
	return createResponse($answer, $db);	
}

function createResponse($answer, $db){
	if($answer=="1"){
		$car = getCarData($db);
		$charger = getChargerData($db);
		
		$response = "Charge Type: " . $charger['type'] . "<br>";
		$response.= "Charge Rate: " .convertChargingRate($charger) .  "<br>";
		$response.= "Target Charge: " .convertTargetBatteryCharge($charger, $car) . "%<br>";
		$response.= "Estimated Time: " . getEstimatedTime($charger, $car) . "<br>";
	}
	else
		$response = $answer;
	
	return $response;
}

function setTimedCharge(){
	return "Server: Not implemented";
}

function setESBNCharge(){
	return "Server: Not implemented";
}

function getEstimatedTime($charger, $car){
	return "55 minutes";
}

function convertChargingRate($charger){
	if($charger['chargingRate']==4000)
		$rate = "Fast";
	else if($charger['chargingRate']==2000)
		$rate = "Medium";
	else //1000
		$rate = "Slow";
		
	return $rate;
}	

function convertTargetBatteryCharge($charger, $car){
	return 100*$charger['targetCharge']/$car['batteryCapacity'];
}

function convertCurrentBatteryCharge($car){
	return 100*$car['batteryCharge']/$car['batteryCapacity'];
}

function getChargeRate(){


if($_POST['chargeRate']=="Fast")
	$rate=4000;

else if($_POST['chargeRate']=="Medium")
	$rate=2000;

else
	$rate=1000;

 return $rate;
}
?>