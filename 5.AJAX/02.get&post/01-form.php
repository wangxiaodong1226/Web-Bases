<?php
	header("Content-Type:text/html;charset=utf-8");
	// echo $_GET;
	// print_r($_POST);
	// print_r($_GET["username"]);
	// print_r($_POST["username"]);

	//如果此方法返回值为1的时候证明是从前台请求过来的，否则就是直接进入php文件
	$res1 = array_key_exists("username", $_POST);
	$res2 = array_key_exists("username", $_GET);
	// print_r($res1);

	// if($res1){
	// 	print_r($_POST["username"]);
	// }
	// else if($res2){
	// 	print_r($_POST["username"]);
	// }


	// if($res1){
	// 	print_r($_POST["username"]);
	// }else{
	// 	echo "直接进入php的";
	// }


	// if(4>5){
	// 	echo "4";
	// }else if(4>3){
	// 	echo "3";
	// }else{
	// 	echo "5";
	// }



	// if($res2){
	// 	print_r($_GET["username"]);
	// }
	// wamp安装目录下的tmp文件夹中可以看到临时文件，需要配合sleep方法，不然瞬间消失，就看不见了
	sleep(5);
	print_r($_FILES);
	//参数一，要移动的文件
	//参数二，文件的新位置
	
   move_uploaded_file($_FILES["pic"]["tmp_name"], "./upload/".$_FILES["pic"]["name"])
   

   // move_uploaded_file($_FILES["pic"]["tmp_name"], "./upload/"."bbb.png")
?>
?>