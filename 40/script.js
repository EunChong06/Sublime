function text(){
	var txt='<div class"root">Hello World!</div>';
	document.getElementById('root').innerHTML=txt;
}
function send(){
	var input=parseInt(document.getElementById('txt').value);
	var input1=parseInt(document.getElementById('txt1').value);
	document.getElementById('qwer').innerHTML=input*input1;
}
function ok(){
	var input=parseInt(document.getElementById('txt').value);
	var input1=parseInt(document.getElementById('txt1').value);
	document.getElementById('wert').innerHTML=input/input1;
}
