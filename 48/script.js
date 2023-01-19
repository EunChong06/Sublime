function q(){
	var names = ["Chong","Zafar","Daniar"];
	var lnames = ["Kim","Mirzaraimov","Saidaliev"];
	var age = [16,16,15];
	var img = ["https://avatars.mds.yandex.net/i?id=892e365f16de09ffe56e79d48b81cf66-6281374-images-thumbs&n=13",
	"https://avatars.mds.yandex.net/i?id=31b832f36ba02ae020310adfffb3ee60-5235146-images-thumbs&n=13","https://avatars.mds.yandex.net/i?id=df7a2fe926faeda503e6d6f3ac6c349d-4955727-images-thumbs&n=13 "];
	var text = "";
	for(var i=0;i<names.length;i++){
		text += "<b>"+ names[i]+" "+lnames[i]+" "+age[i]+"</b>"+
		"<img src='"+img[i]+"' width='100' height='100'><br>";
	}
document.getElementById('q').innerHTML=text;
}
q();
//function w(){
	//var text = "";
	//for (var i=1;i<100;i++){
		//text+=i+")<br>"; 
	//}
	//document.getElementById('w').innerHTML=text;	
//}
//w();