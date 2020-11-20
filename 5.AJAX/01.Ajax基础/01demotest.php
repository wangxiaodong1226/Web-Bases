<?php
	header("Content-Type:text/html;charset=utf-8");
	//单行注释
	/*
		多行注释
	 */
	// $a=1;
	// echo $a;

	$str1='666';
	$str2="999$str1";
	// $str2='999$str1';
	// echo $str2;
	// echo $str1."haha";
	// 
	$arr=array("a","b","c");
	// echo $arr;
	// print_r($arr);
	

	function fn2($name){
		echo "名字是".$name."<br>";
	}
	fn2("哈哈");

	function fn3($food="西蓝花"){
		echo $food."好吃";
	}
	fn3("西葫芦");

	class Car{
		public $color;
		public $num;
		function run(){
			echo "run...";
		}
	}


	$c=new Car();
	$c->color="red";
	$c->num=4;
	// echo $c->color.$c->num;
	// $c->run();
	
	$arr=array(1,2,3,"haha");
	//详细信息输出
	var_dump($arr);

	for($i=1;$i<=10;$i++){
		echo $i."<br>";
	}

	$arr=array("red","green","blue","yellow");
	foreach($arr as $aaa){
		echo $aaa."<br>";
	}
?>

