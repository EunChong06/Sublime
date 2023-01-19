var array = [{
	brand : "Mercedes",
	year : 2005,
	city : "Osh",
	model : "Benz",
	img:"https://avatars.mds.yandex.net/i?id=001c0938e7dfe1798c953832b34d56a3-5332625-images-thumbs&n=13"
},
{	brand : "BMW",
	year : 2005,
	city : "Osh",
	model : "i8",
	img:"https://avatars.mds.yandex.net/i?id=c58c115a0346f7edcb60879bf4f94059-5491350-images-thumbs&n=13"
}
]
var text = "";
for (var i=0; i<array.length; i++){
	text += '<div class="col-md-12" style="border: 1px solid;">'+'<img src="'+array[i].img+'" width="300" height="200">"<p>Brand:'+array[i].brand+"</p>"+"<p>Year:"+array[i].year+"</p>"+"<p>City:"+array[i].city+"</p>"+"<p>Model:"+array[i].model+"</p>";
}
document.getElementById('q').innerHTML = text;