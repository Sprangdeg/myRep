<?php

function createResponse($db){
	$charger = getChargerData($db);
	$car = getCarData($db);
	
	$response = new Answer;
	$response->chargingType= $charger['type'];
	$response->chargingRate= chargingRateToken($charger['chargingRate']);
	$response->targetCharge= batteryChargePercent($charger['targetCharge'], $car['batteryCapacity']);
	$response->currentCharge= batteryChargePercent($car['batteryCharge'], $car['batteryCapacity']);
	$response->timeLeft= getEstimatedTime($charger['chargingRate'], $charger['targetCharge'], $car['batteryCharge']);	
	$response-> model = $car['model'];
	$response-> regNumber = $car['regNumber'];
	$response-> connected = $car['connected'];
	$response-> targetTime = $charger['targetTime'];
	
	$response-> activity = $charger['activity'];
	//$response->price= getPrice();
	return $response;
}

class Answer {
       public $chargingType  = "";
	   public $chargingRate = "";
	   public $targetCharge = "";
	   public $currentCharge = ""; 
	   public $targetTime = "";
	   public $timeLeft = "";
	   public $model = "";
	   public $regNumber = "";
	   public $connected = "";   
	   public $activity = ""; 
	   public $price = ""; 
   }	

?>