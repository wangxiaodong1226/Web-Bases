 function ajax_get(url,fn,data){
	var ajax = new XMLHttpRequest();
	if(data){
		ajax.open("get",url+"?"+data);
	}else{
		ajax.open("get",url);
	}
	ajax.send();
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			fn(ajax.responseText);
		}
	}
}

function ajax_post(url,fn,data){
	var ajax = new XMLHttpRequest();
	ajax.open("post",url);
	ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");

	// ajax.send(data);
	if(data){
		ajax.send(data);
	}else{
		ajax.send();
	}
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			fn(ajax.responseText);
		}
	}
}

function ajax_tool(json){
	var ajax = new XMLHttpRequest();
	if(json.method == "get"){
		if(json.data){
			ajax.open("get",json.url + "?" + json.data);
		}else{
			ajax.open("get",json.url);
		}
		ajax.send();
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				json.fn(ajax.responseText);
			}
		}
	}else if(json.method == "post"){
		ajax.open("post",json.url);
		ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
		if(json.data){
			ajax.send(json.data);
		}else{
			ajax.send();
		}
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				json.fn(ajax.responseText);
			}
		}
	}

}


