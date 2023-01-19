function red(){
	document.body.style.backgroundColor = "red";
}
function blue(){
	document.body.style.backgroundColor = "blue";
}
function yellow(){
	document.body.style.backgroundColor = "yellow";
}
var block = document.getElementById('box');
function width(){
	var input = document.getElementById('width').value;
	block.style.width = input;
}
var block = document.getElementById('box');
function height(){
	var input = document.getElementById('height').value;
	block.style.height = input;
}