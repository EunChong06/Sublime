
function a(){
	function q(){
		$("#q").css({"opacity":"1","background-color":"white","transition":"4s"});
	}
	setTimeout(q,1000);

	function w(){
		$("#q").css({"margin-top":"0","opacity":"0","background-color":"white","transition":"4s"});
	}
	setTimeout(w,2000);

	function e(){
		$("#w").css({"opacity":"1","background-color":"white","transition":"4s"});
	}
	setTimeout(e,2000);

	function r(){
		$("#w").css({"width":"40px","margin-top":"0","opacity":"0","background-color":"white","transition":"4s"});
	}
	setTimeout(r,3000);
	function t(){
		$("#e").css({"opacity":"1","background-color":"white","transition":"4s"});
	}
	setTimeout(t,3000);

	function y(){
		$("#e").css({"width":"40px","margin-top":"0","opacity":"0","background-color":"white","transition":"4s"});
	}
	setTimeout(y,4000);
	function u(){
		$("#r").css({"opacity":"1","background-color":"white","transition":"4s"});
	}
	setTimeout(u,4000);

	function i(){
		$("#r").css({"width":"40px","margin-top":"0","opacity":"0","background-color":"white","transition":"4s"});
	}
	setTimeout(i,5000);
}
setInterval(a,5001);
