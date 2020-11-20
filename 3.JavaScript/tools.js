 /**
  * 通过标签名获取元素
  * @param tag 标签的名字
  */ 
 function getTag(tag){
 	return document.getElementsByTagName(tag);
 }
 /**
  * 通过类名获取元素
  * @param name 标签的classs 名字
  */ 
 function getClass(name){
 	return document.getElementsByClassName(name);
 }
 /**
  * 通过id获取元素
  * @param id 标签的id
  */ 
 function getId(id){
 	return document.getElementById(id);
 }
 /**
  * 获取下一个兄弟节点
  * @param ele
  */ 
 function getns(ele){
 	return ele.nextElementSibling ||ele.nextSibling;
 }
 /**
  * 获取上一个兄弟节点
  * @param ele
  */ 
 function getps(ele){
 	return ele.previousElementSibling || ele.previousSibling;
 }
 /**
  * 获取第一个子节点
  * @param ele
  */ 
 function getfs(ele){
 	return ele.firstElementChild ||ele.firstChild;
 }
 /**
  * 获取最后一个子节点
  * @param ele
  */ 
 function getls(ele){
 	return ele.lastElementChild || ele.lastChild;
 }
 /**
  * 获取所有兄弟节点
  * @param ele
  */ 
 function getSibling(ele){
 	var newArr=[];
 	var arr=ele.parentNode.children;
 	for(var i=0;i<=arr.length;i++)
 	{
 		if(arr[i]!=ele){
 			newArr.push(arr[i]);
 		}
 	}
 	return newArr;
 }
 /**
  * 匀速动画
  * @param ele 要移动的元素
  * @param target 目标位置 
  */ 
 function uniformAnimation(ele,target){
 	clearInterval(ele.timer);
 	var step = target-ele.offsetLeft>0?10:-10;
 	ele.timer=setInterval(function(){ 
 		if(Math.abs(target-ele.offsetLeft)<=Math.abs(step)){
 			ele.style.left=target+"px";
 			clearInterval(ele.timer);
 		}else{
 			ele.style.left=ele.offsetLeft+step+"px";
 		}
 	},10)
 }
/**
  * 缓动动画
  * @param ele 要移动的元素
  * @param target 目标位置 
  */ 
 function slowAnimation(ele,target){
        clearInterval(ele.timer);
        
        ele.timer = setInterval(function(){
          //计算步长，目标位置 - 当前位置 / 10 ，（400 - 0 ） /10 ，第一步走40像素
          var step = (target - ele.offsetLeft) / 10;
          //由于offsetLeft会自动四舍五入，所以走到396这个位置的时候
          //（400 - 396） step = 0.4 当前位置会走到396.4 但是下一次走的时候取当前位置的时候会四舍五入又变回396，所以一直在396.4和396之间来回循环着走
          //判断step>0的话就是向右边走，向上取整 step<0的话就是向左走，向下取整，也就是最后4步都是1px
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          if(Math.abs(target - ele.offsetLeft) <= Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
          }else{
            ele.style.left = ele.offsetLeft + step + "px";
          }
        },80);
      }
/**
 * 获取网页左边或上边滚动大小
 * @return {[json]} [description]
 */
function myScroll(){
  var json = {
    "left": window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  }
  return json;
}
/**
 * 检查浏览器宽/高度(可视化区域)
 * @return {[json]} [description]
 */
function myClient() {
  if(window.innerWidth!= undefined){
      return{
          width:window.innerWidth,
          height:window.innerHeight
      }
  }else if(document.compatMode=== "CSS1Compat"){
      return{
          width:document.documentElement.clientWidth,
          height:document.documentElement.clientHeight,
      }
  }
  return{
      width:document.body.clientWidth,
      height:document.body.clientHeight
  }
}




/**
 * 获取某个元素属性值
 * @param  {[type]} ele  [description]
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
  function getStyle(ele,attr){
      if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
      }else{
        return ele.currentStyle[attr];
      }
    }

/**
 * 缓动框架
 * @param  {[type]}   ele  [description]
 * @param  {[type]}   json [description]
 * @param  {Function} fn   [description]
 * @return {[type]}        [description]
 */
    function slowAnimation(ele,json,fn){

      clearInterval(ele.timer);
      ele.timer = setInterval(function(){
        var bool = true;
        for(var key in json){
          var larder;
          if(key === "opacity"){
            larder = getStyle(ele,key) * 100;
          }else{
            larder = parseInt(getStyle(ele,key));
          }
          var step = (json[key] - larder) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          larder = larder + step;

          if(key === "opacity"){
            ele.style[key] = larder / 100;
          }else if(key === "zIndex"){
            ele.style["zIndex"] = json[key];
          }else{
            ele.style[key] = larder + "px";
          }

          

          if(larder != json[key]){
            bool = false;
          }

        }
        if(bool == true){
          clearInterval(ele.timer);

          fn && fn();

        }

      },30)
    }



    