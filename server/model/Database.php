<?php 

function getDatabase(){
    $database = "mydb1448";
    $usr= 'mydb1448bd';
    $password = 'ha7gup';
    $mysqli = new mysqli("localhost", $usr, $password, $database);
    if ($mysqli->connect_errno) {
        echo "Failed to connect to database : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    return $mysqli;
}

function getCarData($db){
	$mySQL="SELECT connected, batteryCapacity, batteryCharge FROM Car";
	$response = $db->query($mySQL);
	return $response->fetch_array(MYSQLI_ASSOC);
}

function getChargerData($db){	
	$mySQL="SELECT chargingRate, targetCharge, type FROM Charger";
	$response = $db->query($mySQL);
	return $response->fetch_array(MYSQLI_ASSOC);
}

function setChargerData($db, $targetCharge, $chargeRate, $type){
	$mySQL="UPDATE Charger SET chargingRate = '" . $chargeRate ."', targetCharge = '" . $targetCharge . "', type = '" . $type . "'";
	$response = $db->query($mySQL);
	
	if($response)
		return "updated";
	else
		return "not updated";
		
	//return $response->fetch_array(MYSQLI_ASSOC);
}

function setBatteryCharge($db, $batteryCharge){
	$mySQL="UPDATE Car SET batteryCharge = '" . $batteryCharge . "'";
	$response = $db->query($mySQL);
	return $response->fetch_array(MYSQLI_ASSOC);
}

function closeConnection($db){
	$db->close();
}


?>
