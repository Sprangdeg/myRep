<?php

function getStatistics(){
	$db = getDatabase();
	
	$car = getCarData($db);
    $charger = getChargerData($db);
	
		$response = "Charge Type: " . $charger['type'] . "<br>";
		$response.= "Charge Rate: " .convertChargingRate($charger) .  "<br>";
		$response.= "Target Charge: " .convertTargetBatteryCharge($charger, $car) . "%<br>";
		$response.= "Estimated Time: " . getEstimatedTime($charger, $car) . "<br>";
	
	
	return $response;
}
?>



