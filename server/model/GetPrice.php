<?php
function getEstimatedPrice(){

 /* TESTING PURPOSE
 $_POST['targetTime'] = "12:00";
 $_POST['targetCharge'] = "100"; 
 */

	$startTime =  date('H:i');	
	$endTime =  $_POST['targetTime']; 

	
	$db = getDatabase();
	$car = getCarData($db);
	$charger = getChargerData($db);
	$energyReq = getEnergyRequired($car['batteryCharge'], batteryChargeWh($_POST['targetCharge'],$car['batteryCapacity']));
	$tariff = getTariff($db, $startTime, $endTime);
	$price = getLowestPrice($tariff, $energyReq);
	
	return $price;
}

function getLowestPrice($tariff, $energyReq){
	$chargeRate = chargingRateToValue("Fast");
	$price = 0;
	$i = 0;
	while($i < sizeof($tariff->price) and $energyReq>=0){
		//If you need less then a full half hour of charging it will calculate that
		if($energyReq>=$chargeRate)
			$price += $chargeRate * $tariff->price[$i];	
		else
			$price += $energyReq * $tariff->price[$i];
		
		$i++;
		$energyReq -= $chargeRate;
	}
	
	if($energyReq>0)
		$price = 0;		
		
	return round($price, 2);
}

?>