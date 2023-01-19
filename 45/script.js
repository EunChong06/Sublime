function lights(){
function box(){
	var red = document.getElementById('q');
	red.style.backgroundColor="red";
	var orange = document.getElementById('w')
	orange.style.backgroundColor="grey";
		var green = document.getElementById('e')
	green.style.backgroundColor="grey";
}
setTimeout(box,2000);
function qw(){
	var orange = document.getElementById('w')
	orange.style.backgroundColor="orange";
		var red = document.getElementById('q');
	red.style.backgroundColor="grey";
		var green = document.getElementById('e')
	green.style.backgroundColor="grey";

}
setTimeout(qw,3000);
function we(){
	var green = document.getElementById('e')
	green.style.backgroundColor="green";
		var red = document.getElementById('q');
	red.style.backgroundColor="grey";
		var orange = document.getElementById('w')
	orange.style.backgroundColor="grey";
}
setTimeout(we,4000);
}
setInterval(lights,5000);
