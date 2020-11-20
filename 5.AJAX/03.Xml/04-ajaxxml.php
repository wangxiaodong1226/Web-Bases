<?php
	header('Content-Type:text/xml;charset=utf-8');
	echo file_get_contents("data/data.xml");
?>