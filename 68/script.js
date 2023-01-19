$(document).ready(function(){
	$("#btn").click(function(){
		function m(){
		$("#square").css({"margin-top":"550px","transition":"2s"});
		}
		setTimeout(m,1000);

		function n(){
		$("#square").css({"margin-top":"300px","transition":"2s"});
		}
		setTimeout(n,6000);

		function b(){
		$("#square").css({"margin-top":"0px","transition":"2s"});
		}
		setTimeout(b,10000);

	});
});


