
function first(){
	$("#car").css({"margin-left":"500px","transition":"4s"});
}
setTimeout(first,2000);

function second(){
	$("#car").css({"margin-left":"1500px","transition":"4s"});
}
setTimeout(second,6000);

function lights(){
	function red(){
			var red = document.getElementById('red');
		red.style.backgroundColor="red";
			var yellow = document.getElementById('yellow')
		yellow.style.backgroundColor="grey";
			var green = document.getElementById('green')
		green.style.backgroundColor="grey";	
	}
	setTimeout(red,1000);
	function yellow(){
			var yellow = document.getElementById('yellow');
		yellow.style.backgroundColor="yellow";
			var red = document.getElementById('red')
		red.style.backgroundColor="grey";
			var green = document.getElementById('green')
		green.style.backgroundColor="grey";	
	}
	setTimeout(yellow,2000);
	function green(){
			var green = document.getElementById('green');
		green.style.backgroundColor="green";
			var yellow = document.getElementById('yellow')
		yellow.style.backgroundColor="grey";
			var red = document.getElementById('red')
		red.style.backgroundColor="grey";	
	}
	setTimeout(green,3000);
}
setInterval(lights,3000);

