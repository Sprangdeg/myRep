
<?php
// everything which is printed through php and html will be loaded
// by ajax ! 
// the strong tag too !
?>
<strong>
<?php
if(isset($_POST['name']))
{
	echo 'your name is :'.$_POST['name'];
}
else
{
	echo "you didn't put any name !";
}

?>
</strong>

