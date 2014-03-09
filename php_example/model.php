<?php
$db = getDatabase();

function getDatabase()
{
	$database = "mydb1448";
	$usr= 'mydb1448bd';
	$password = 'ha7gup';
	$mysqli = new mysqli("localhost", $usr, $password, $database);
	if ($mysqli->connect_errno) {
      echo "Failed to connect to database : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
   }
   return $mysqli;
}

function createInfoPage(){
	$info = getStatus($db);
	
echo Name: . $info["name"] . Charge: . $info["charge"]; 
}

function getStatus($db)
{
   $response = $db->query('SELECT name, charge FROM Application');
   
   while($array = $response->fetch_array(MYSQLI_ASSOC)) {  
      $result[]=$array["name"]. ' : '.$array['charge'].'<br />';
   }
   return $result;
}

if (!$stmt->bind_param("ss", $nickname,$message)) {
    echo "Failed to insert in database : (" . $stmt->errno . ") " . $stmt->error;
   }

if (!$stmt->execute()) {
     echo "Failed to insert in database : (" . $stmt->errno . ") " . $stmt->error;
   }
}

?>
