<?php
	header('Content-Type:text/html;charset=utf-8');

	echo $_POST["username"]."|".$_POST["pwd"];


	// array_key_exists(key, array)
	
	// $f=fopen("D:\\buka\\day31\\text.txt","w");
	// fwrite($f,$_POST);
	// fclose($f);
	
	//绝对路径
	// $f=fopen("D:\\buka\\day31\\text.txt","w");
	// fwrite($f,implode("-",$_POST));
	// fclose($f);//数组转字符串


	//相对路径
	// $DOCUMENT_ROOT = $_SERVER["DOCUMENT_ROOT"];

	// $f = fopen("$DOCUMENT_ROOT/day31/text.txt","w");

	// fwrite($f,implode("|||",$_POST));//数组转字符串
	// fclose($f);

?>