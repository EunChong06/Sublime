function date(){
var hour = new Date().getHours(); 
var min = new Date().getMinutes(); 
var sec = new Date().getSeconds(); 
document.getElementById('qw').innerHTML=hour+":"+min+":"+sec;
}
function time(){
var date = new Date().getDate(); 
var month = new Date().getMonth(); 
var year = new Date().getFullYear(); 
var day = new Date(). getDate(); 
month=month+1;
document.getElementById('qw').innerHTML=date+"."+month+"."+year;
}