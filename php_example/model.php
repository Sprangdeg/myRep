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

function getStatus($db)
{
   $response = $db->query('SELECT * FROM Application');
   
   while($array = $response->fetch_array(MYSQLI_ASSOC)) {  
      $result[]=$array["nickname"]. ' : '.$array['message'].'<br />';
   }
   return $result;
   
}

function insertComment($db,$nickname,$message)
{
   if (!($stmt = $db->prepare("INSERT INTO commentsection(nickname,message) VALUES (?,?)"))) {
     echo "Failed to insert in database : (" . $db->errno . ") " . $db->error;
}

/* Requête préparée, étape 2 : lie les valeurs et exécute la requête */

if (!$stmt->bind_param("ss", $nickname,$message)) {
    echo "Failed to insert in database : (" . $stmt->errno . ") " . $stmt->error;
   }

if (!$stmt->execute()) {
     echo "Failed to insert in database : (" . $stmt->errno . ") " . $stmt->error;
   }
}

?>
