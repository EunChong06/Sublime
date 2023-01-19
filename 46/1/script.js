function lights(){
function w(){
		var yellow = document.getElementById('w');
	yellow.style.backgroundColor="yellow";
		var red = document.getElementById('r')
	red.style.backgroundColor="grey";
}
setTimeout(w,1000);
function r(){
		var red = document.getElementById('r');	
	red.style.backgroundColor="yellow";
		var yellow = document.getElementById('w')
	yellow.style.backgroundColor="grey";	
}
setTimeout(r,2000);
}
setInterval(lights,2000);