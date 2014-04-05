<?php
$db = getDatabase();
getStatus($db);

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

function getStatus($db){
   $response = $db->query('SELECT name, charge FROM Application');

   $array = $response->fetch_array(MYSQLI_ASSOC);
   end($array);
   $temp = $array['name'];
   echo "<b>" . $temp . " charger" . "</b> <br>";
   echo "Vehicle: Connected" . "<br>"; //Need code here
   echo "Charge: " . $array['charge'] . "<br>";
}

?>
