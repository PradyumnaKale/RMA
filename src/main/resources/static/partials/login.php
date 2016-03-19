<?php
	$user=$_POST["userId"];
	$pass=$_POST["pass"];
	if($user=="hello" && $password=="world")
		echo "welcome ".$user." your password is ".$pass;
	else
		echo "incorrect details";
?>