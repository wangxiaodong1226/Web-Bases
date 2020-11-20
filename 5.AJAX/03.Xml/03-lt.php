<?php
	header('Content-Type:text/html;charset=utf-8');
	$mess = $_POST["mess"];
	switch ($mess) {
		case '哈哈':
				$arr = array("你笑啥","傻笑啥","哈哈啥");
				$index = array_rand($arr,1);
				sleep(3);
				echo $arr[$index];
			break;
		case '呵呵':
				$arr = array("你呵呵啥","傻呵呵啥","呵呵回答","呵呵不回答");
				$index = array_rand($arr,1);
				sleep(3);
				echo $arr[$index];
			break;
		
		default:
				$arr = array("aaaaa","bbbbb","vcvvvvvv","ddddddd","efeeee");
				$index = array_rand($arr,1);
				sleep(3);
				echo $arr[$index];
			break;
	}
?>