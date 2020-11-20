<?php
	header('Content-Type:text/html;charset=utf-8');
	echo $_GET["callback"]."({name:'zhangsan',age:18})";

	// (function fn(data) {
	// 		console.log("我被调用了");
	// 		console.log(data);
	// })({name:'zhangsan',age:18})
	//
	// 
	//  
	//    
	// function fn(data) {
	// 		console.log("我被调用了");
	// 		console.log(data);
	// }
	// 
	// fn({name:'zhangsan',age:18})
?>
