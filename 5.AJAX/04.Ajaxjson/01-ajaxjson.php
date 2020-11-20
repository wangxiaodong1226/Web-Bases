<?php
	header('Content-Type:text/html;charset=utf-8');

	echo file_get_contents("data/data.json");
	
	/*$str = '[1,2,3]';

	print_r(json_decode($str));

	$arr = array(6,7,8);

	echo json_encode($arr);*/
?>