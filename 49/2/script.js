var img = ["http://www.gadget.kg/upload/catalog/36/item_3560/thumbs/9372d139547563af6e56f4e902808b4b.jpg","http://www.gadget.kg/upload/catalog/28/item_2753/thumbs/a819d593dcf4cf5ea016455e4cd94791.jpg","http://www.gadget.kg/upload/catalog/34/item_3330/thumbs/481c3a3a887a450f59714946053e7a27.jpg","http://www.gadget.kg/upload/catalog/36/item_3566/thumbs/910c18e77a6b4a10f911a723d48b5dd7.jpg"];
var text = "";
var logo = ["Хиты продаж"];
var list = ['Подарочные сертификаты','от Нашего Магазина','Графический планшет','Портативный USB'];
var much = ['100$','200$','300$','400$'];
 	for (var i=0; i<img.length; i++){
 		text += '<div class="col-md-3"><h3>'+logo+'</h3>'+'<img src="'+img[i]+'" width="150" height="150">'+'<p>'+list[i]+'</p>'+'<p>'+much[i]+'<p></div>';
 	}
 	document.getElementById('q').innerHTML = text;