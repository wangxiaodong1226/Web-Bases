<?php
	header('Content-Type:text/html;charset=utf-8');
	

	if($_GET["username"] === "zhangsan"){
		echo "登录成功！";
	}else{
		echo "失败！";
	}
?>