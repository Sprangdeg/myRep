<?php

function getStatistics(){
	$db = getDatabase();
	
	$car = getCarData($db);
    $charger = getChargerData($db);
	
		$response = new Answer;
		$response->chargingType= $charger['type'];
		$response->chargingRate= chargingRateToken($charger['chargingRate']);
		$response->targetCharge= batteryChargePercent($charger['targetCharge'], $car['batteryCapacity']);
	    $response->currentCharge= batteryChargePercent($car['batteryCharge'], $car['batteryCapacity']);
        $response->timeLeft= getEstimatedTime($charger['chargingRate'], $charger['targetCharge'],  $car['batteryCharge']);

	return $response;
}


?>



