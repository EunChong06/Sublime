function infinity(){
function q(){
	document.getElementById('q').innerHTML="Hello";
}
setTimeout(q,1000);
function w(){
	document.getElementById('q').innerHTML="World!";
}
setTimeout(w,2000);
function e(){
	document.getElementById('q').innerHTML="HelloWorld!";
}
setTimeout(e,3000);
}
setInterval(infinity,4000)