<?php
	header('Content-Type:text/html;charset=utf-8');

	$picture = array(
		'pic1'=>'imgs/01.jpg',
		'pic2'=>'imgs/02.jpg',
		'pic3'=>'imgs/03.jpg'
	);
	$res = $_POST['haha']; //pic1/pic2/pic3

	echo $picture[$res];
?>