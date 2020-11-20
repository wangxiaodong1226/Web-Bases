
//绑定在原型上，调用者是jquery对象
$.fn.setColor = function () {
	this.css({"color":"red"})
}

//绑定在$上，调用者是$
$.setColor = function(ele){
	ele.css({"color":"blue"})
}