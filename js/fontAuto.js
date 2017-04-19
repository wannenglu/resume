var fontAuto = {
	FA:function(json){//width表示网页的宽度
//		console.log(this);
		this.init(json);
	}
}
fontAuto.FA.prototype = {
	faFun:function(json){
//		var winW = $(window).width();//屏幕的宽度
		var winW = document.documentElement.clientWidth;//屏幕的宽度
//		console.log(winW,json.width);
		if(winW >= json.width){
//			$("html").css({fontSize:"625%"});
			document.documentElement.style.fontSize = "625%";
		}
		else{
//			$("html").css({fontSize:(winW/json.width*625)+"%"});
			document.documentElement.style.fontSize = (winW/json.width*625)+"%";
		}
	},
	init:function(json){
		this.faFun(json);//触发一次字体设置
		var obj = this;
//		$(window).resize(function(){
//			obj.faFun(json);
//		});
//		console.log(obj);
		window.onresize = function(){
			obj.faFun(json);
		}
	},
	constructor:fontAuto.FA	//返回对创建此对象的数组函数的引用。
}
var fa = new fontAuto.FA({
	width:640
});
	//alert(fa.constructor);
	/*以上alert结果
	 *	function(json){//width表示网页的宽度
//			console.log(this);
	 *		this.init(json);
	 *	}
	*/




































