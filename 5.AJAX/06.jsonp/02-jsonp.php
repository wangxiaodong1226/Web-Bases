<?php
	header('Content-Type:text/html;charset=utf-8');
	echo $_GET["callback"]."()";
?>