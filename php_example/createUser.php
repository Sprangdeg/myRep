<?php
$mysqli = getDatabase();
createUser($mysqli);

function getDatabase(){
	$database = "mydb1448";
	$usr = 'mydb1448bd';
	$password = 'ha7gup';
	$mysqli = new mysqli("localhost", $usr, $password, $database);
	if ($mysqli->connect_errno) {
      echo "Failed to connect to database : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
   }
   return $mysqli;
}

function sanitize($target){
	
}

function createUser($mysqli){

  $name = $_POST['name'];
  $charge = $_POST['charge'];
  
  /* create a prepared statement */
if ($stmt = $mysqli->prepare("INSERT INTO Application (name, charge) VALUES (?,?)")) {

    /* bind parameters for markers */
    $stmt->bind_param("si", $name, $charge);

    /* execute query */
    $stmt->execute();

	if($stmt)
		echo "Added " . $name . " to database";
    else
		echo "Failed to insert in database";

    /* close statement */
    $stmt->close();
}

/* close connection */
$mysqli->close();

}

//if (!$stmt->bind_param("ss", $nickname,$message)) {
//     : (" . $stmt->errno . ") " . $stmt->error;
//   }

?>
