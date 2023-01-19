function a(){
	function green(){
		var green = document.getElementById('q');
		green.style.backgroundColor="pink";
	var green = document.getElementById('e');
		green.style.backgroundColor="green";
	}
	setTimeout(green,1000);

	function orange(){
		var orange = document.getElementById('e');
		orange.style.backgroundColor="blue";
		var orange = document.getElementById('w');
		orange.style.backgroundColor="orange";
	}
	setTimeout(orange,1500);

	function pink(){
		var pink = document.getElementById('w');
		pink.style.backgroundColor="green";
				var pink = document.getElementById('r');
		pink.style.backgroundColor="pink";

	}
	setTimeout(pink,2000);

	function blue(){
		var blue = document.getElementById('r');
		blue.style.backgroundColor="orange";
		var blue = document.getElementById('q');
		blue.style.backgroundColor="blue";
	}
	setTimeout(blue,2500);
}
setInterval(a,3000)