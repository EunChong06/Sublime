var img = ["https://avatars.mds.yandex.net/i?id=76e942dbabe55cd6bfb221c588601576-4120615-images-thumbs&n=13","https://avatars.mds.yandex.net/i?id=4725a374775e373c70adf0e71ce5b4bb-6614807-images-thumbs&n=13","https://avatars.mds.yandex.net/i?id=2a0000017a0f5ab9d2bd6179a5ee423f0f89-4012553-images-thumbs&n=13"];
var text = "";
var list = ['Zafar','Daniyar','Daniel'];
	for (var i=0; i<img.length; i++){
		text += '<div class="col-md-4"><img src="'+img[i]+'" width="150" height="150">'+'<p>'+list[i]+'</p></div>';
	}
	document.getElementById('q').innerHTML = text;