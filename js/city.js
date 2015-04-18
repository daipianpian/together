// JavaScript Document
window.onload = function(){
	var a = document.getElementById("areas1");

	/*
	*1：插件默认定位到网页原点(0,0)，需要自己给出插件的绝对定位
	*2: 插件回调函数为空函数，需要自定义回调，插件返回被选择的城市作为回调的参数
	*3: 在一个页面上，插件只产生一个实例
	*/
	a.onclick = function(){
		citypicker.show({left: 322, top : 224}, function(data){
			a.value = data;
		});
	};
  }