<?php
function batteryChargeWh($targetCharge, $batteryCapacity){
	return $targetCharge*$batteryCapacity/100;
}


function batteryChargePercent($targetCharge, $batteryCapacity){
	$charge = 100*$targetCharge/$batteryCapacity;
		return round($charge);
	
}

function chargingRateToken($chargingRate){
	if($chargingRate==4000)
		$rate = "Fast";
	else if($chargingRate==2000)
		$rate = "Medium";
	else if($chargingRate==1000)
		$rate = "Slow";
	else
		$rate = "Incorrect conversion";
		
	return $rate;
}

function chargingRateToValue($chargingRate){
// rate is in W
if($chargingRate=="Fast")
	$rate=4000;

else if($chargingRate=="Medium")
	$rate=2000;

else
	$rate=1000;

 return $rate;
}

function getEstimatedTime($chargingRate, $targetCharge, $currentCharge){
	// chargingRate is Wh/h
	// charge is Wh
	// Wh/(Wh/h) = (Wh*h)/Wh = h
	$hours =  ($targetCharge-$currentCharge)/$chargingRate; 
	return $hours;
}

function getEnergyRequired($currentCharge, $targetCharge){
	return ($targetCharge - $currentCharge);

}

//Converts price from megawatt hour to kilowatt hour
function pricePerWh($priceMWh){
  return $priceMWh/1000000;
}
?>
