<?php
	header('Content-Type:text/html;charset=utf-8');
	$arr=array("dalian","lisi","wangwu","zhaoliu");
	$name = $_POST["name"];
	//判断某一个值是否在某个数组中存在
	$inner = in_array($name, $arr);
	if($inner){
		echo "重名了";
	}else{
		echo "可以";
	}
?>