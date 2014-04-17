<?php

	function setError($errorMessage){
		$errMes = new Error;
		$errMes->error=$errorMessage;
		return $errMes;
	}
	
	class Error {
       public $error = "";
   }
?>