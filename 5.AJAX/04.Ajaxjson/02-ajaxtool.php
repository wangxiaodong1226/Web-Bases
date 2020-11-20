<?php
	header('Content-Type:text/html;charset=utf-8');
	// echo "响应数据";
	// echo $_POST["username"];
	$arr = array("张飞","关于","刘备");
	echo json_encode($arr);
?>


