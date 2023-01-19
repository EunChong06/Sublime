function first(){
	$("#box").css({"margin-left":"400px","background-color":"purple","transition":"3s"});
}
setTimeout(first,1000);

function second(){
	$("#box").css({"margin-top":"400px","background-color":"purple","transition":"3s"});
}
setTimeout(second,3000);

function third(){
	$("#box").css({"margin-left":"0px","background-color":"purple","transition":"3s"});
}
setTimeout(third,6000);

function fourth(){
	$("#box").css({"margin-top":"0px","background-color":"purple","transition":"3s"});
}
setTimeout(fourth,9000);
