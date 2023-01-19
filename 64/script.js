
$(document).ready(function(){
	$("#btn").click(function(){
		function m(){
		$("#dice").css({"transform":"rotateX(2432deg)","transition":"20s"});
		}
		setTimeout(m,1000);
		function n(){
		$("#dice").css({"transform":"rotateY(2432deg)","transition":"25s"});
		}
		setTimeout(n,2000);

		function q(){
		$("#dice").css({"margin-top":"550px","margin-left":"300px","transition":"3s"});
		}
		setTimeout(q,1000);

		function w(){
			$("#dice").css({"margin-top":"100px","margin-left":"400px","transition":"3s"});}
		setTimeout(w,3000);

		function e(){
			$("#dice").css({"margin-top":"550px","margin-left":"500px","transition":"3s"});
		}
		setTimeout(e,5000);

		function r(){
			$("#dice").css({"margin-top":"200px","margin-left":"600px","transition":"3s"});}
		setTimeout(r,7000);

		function t(){
			$("#dice").css({"margin-top":"550px","margin-left":"700px","transition":"3s"});
		}
		setTimeout(t,9000);

		function y(){
			$("#dice").css({"margin-top":"300px","margin-left":"800px","transition":"3s"});}
		setTimeout(y,11000);

		function u(){
			$("#dice").css({"margin-top":"550px","margin-left":"900px","transition":"3s"});
		}
		setTimeout(u,13000);
	});
});

