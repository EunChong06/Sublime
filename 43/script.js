function date(){
var day = new Date().getDay(); //неделя
// alert(day);
if(day==0){
	day="Воскресенье";
}else if(day==1){
	day="Понедельник";
}else if(day==2){
	day="Вторник";
}else if(day==3){
	day="Среда";
}else if(day==4){
	day="Четверг";
}else if(day==5){
	day="Пятница";
}else if(day==6){
	day="Суббота";
}
var date = new Date().getDate(); //дата
var month = new Date().getMonth(); //0-11
// alert(month);
if(month==0){
	month="Январь";
}else if(month==1){
	month="Февраль";
}else if(month==2){
	month="Март";
}else if(month==3){
	month="Апрель";
}else if(month==4){
	month="Май";
}else if( month==5){
	month="Июнь";
}else if (month==6){
	month="Июль";
}else if (month==7){
	month="Август";
}else if (month==8){
	month="Сертябрь";
}else if(month==9){
	month="Октябрь";
}else if(month==10){
	month="Ноябрь";
}else if(month==11){
	month="Декабрь";
}
var year = new Date().getFullYear();

document.getElementById('qw').innerHTML=day+"."+date+"."+month+"."+year;
} 