$(function(){
	app.initIframe();
	app.hideAside();
})

var app={
	
	initIframe:function(){
		var heights = document.documentElement.clientHeight-100;	
		document.getElementById('rightIfram').height = heights;
	},

	hideAside:function(){
        $('.aside-ul>li:nth-child(-n+10) ul').hide()
        $('.aside h4').click(function(){
            $(this).siblings('ul').slideToggle();
        })
	},
	
}