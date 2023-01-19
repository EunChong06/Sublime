var main = '<div class="container-fluid">'+
		'<div class="row">'+
			'<div class="col-md-3">'+
				'<div class="row">'+
					'<div class="col-md-2 text-center">'+
						'<div class="dropdown">'+
							  '<button class="btn dropdown-toggle my-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">'+
							    '<i class="fa-solid fa-bars"></i>'+
							  '</button>'+
							  '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'+
							    '<a class="dropdown-item" href="#list-bookmark" target="#list-bookmark-list"><i class="fa-solid fa-bookmark"></i> bookmark</a>'+
							    '<a class="dropdown-item" href="#" onclick="Setting();"><i class="fa-solid fa-gear"></i> setting</a>'+
							    '<a class="dropdown-item" href=""><i class="fa-solid fa-address-book"></i> contact</a>'+
						 	 '</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-md-10">'+
						'<input class="mt-1 form-control" type="a" name="" placeholder="Search" >'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-md-9 " style="border-style: solid;">'+
				'<div class="row">'+
					'<div class="col-md-1 text-center">'+
						'<img class="mt-1 mb-1" src="https://avatars.mds.yandex.net/i?id=26120a85ff5789bdee726548cebaf62c-5877198-images-thumbs&n=13" width="35"height="35" style="border-radius: 50%;">'+
					'</div>'+
					'<div class="col-md-8 " style="opacity: 0.5;" >'+
						'<b>User</b>'+
						'<br>'+
						'was 3 min ago'+
					'</div>'+
					'<div class="col-md-3 text-center">'+
						'<div class="row">'+
							'<div class="col-md-3"></div>'+
							'<div class="col-md-1 mt-3 text-center">'+
								'<i class="fa-solid fa-magnifying-glass"></i>'+
							'</div>'+
							'<div class="col-md-1 mt-3 ml-3 mr-3 text-center">'+
								'<i class="fa-solid fa-phone"></i>'+
							'</div>'+
							'<div class="col-md-1 my-2">'+
								'<div class="dropdown">'+
									  '<button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">'+
									   '<i class="fa-solid fa-ellipsis-vertical"></i>'+
									  '</button>'+
									  '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'+
									    '<a class="dropdown-item" href="#"></a>'+
									    '<a class="dropdown-item" href="#">Another action</a>'+
									    '<a class="dropdown-item" href="#">Something else here</a>'+
									  '</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="container-fluid">'+
				'<div class="row">'+
				  '<div class="col-3">'+
				    '<div class="list-group" id="list-tab" role="tablist">'+
				      '<a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">'+
						'<img class="mt-1 mb-1 mr-1" src="https://avatars.mds.yandex.net/i?id=1c87b49e36e367c4af77aad1cfbc4f07-5163188-images-thumbs&n=13" width="35"height="35" style="border-radius: 50%;">Bookmark'+
				  	'</a>'+
				      '<a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">'+
				      	'<img class="mt-1 mb-1 mr-1" src="https://kipmu.ru/wp-content/uploads/enisey.jpg" width="35"height="35" style="border-radius: 50%;">Zafar</a>'+
				      '<a class="list-group-item list-group-item-action" id="list-messages-list	" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">'+
				      	'<img class="mt-1 mb-1 mr-1" src="https://avatars.mds.yandex.net/i?id=5a2772807c7abbf84a1c289bc589e84e-6490940-images-thumbs&n=13" width="35"height="35" style="border-radius: 50%;">Messages</a>'+
				      '<a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">'+
				      '<img class="mt-1 mb-1 mr-1" src="https://avatars.mds.yandex.net/i?id=cd7353b08e235afa6e51bb18acd677d5-5100550-images-thumbs&n=13" width="35"height="35" style="border-radius: 50%;">Settings</a>'+
				    '</div>'+
				  '</div>'+
				  '<div class="col-9" style="background-image: url(https://avatars.mds.yandex.net/i?id=4e051f0f4221c45020bb38b36faf42f7-5288402-images-thumbs&n=13);">'+
				    '<div class="tab-content" id="nav-tabContent">'+
				      '<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><input type="" name="" class="mt-1" value="Hi"></div>'+
				      '<div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><input type="" name="" class="mt-1" value="Yes"></div>'+
				      '<div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><input type="" name="" class="mt-1" value="hellow"></div>'+
				      '<div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><input type="" name="" class="mt-1" value="ok"></div>'+
				    '</div>'+
				  '</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';
var setting = '<div class="container-fluid">'+
		'<div class="row">'+
			'<div class="col-md-3">'+
				'<div class="row">'+
					'<div class="col-md-2 text-center">'+
						'<a class="text-dark" href="#" onclick="Main();"><i class="fa-solid fa-arrow-left"></i></a>'+
					'</div>'+
					'<div class="col-md-2">'+
						'</i><h4>Setting</h4>'+
					'</div>'+
					'<div class="col-md-8 text-center">'+
						'<a class="text-dark" href="#" onclick="Pen();"><i class="fa-solid fa-pen ml-5"></i></a>'+
						'<i class="fa-solid fa-ellipsis-vertical ml-5"></i>'+
					'</div>'+
					'<div class="col-md-12">'+
						'<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'+
						  '<div class="carousel-inner">'+
						    '<div class="carousel-item active">'+
						      '<img src="https://get.pxhere.com/photo/landscape-water-nature-mountain-sky-lake-river-summer-reflection-reservoir-body-of-water-trees-clouds-mountains-forests-russia-loch-tarn-river-bank-yenisei-warm-sun-1141241.jpg" width="100%" height="200" class="d-block w-100" alt="...">'+
						    '</div>'+
						    '<div class="carousel-item">'+
						      '<img src="https://avatars.mds.yandex.net/i?id=f6fbab6eac375d72008ec342a6fd2aa7-5679824-images-thumbs&n=13" width="100%" height="200" class="d-block w-100" alt="">'+
						    '</div>'+
						    '<div class="carousel-item">'+
						      '<img src="https://bask-tour.ru/assets/images/cache/71/39/7139891724f506a9ba5753d8e37e8814.jpg" width="100%" height="200" class="d-block w-100" alt=".">'+
						    '</div>'+
						  '</div>'+
						 '<button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">'+
						    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
						    '<span class="sr-only">Previous</span>'+
						  '</button>'+
						  '<button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">'+
						    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
						    '<span class="sr-only">Next</span>'+
						  '</button>'+
						'</div>'+
					'</div>'+
					'<div class="col-md-12 text-center">'+
						'<h5 class="my-3"><i class="fa-solid fa-gear"></i><a class="text-dark" href="">Общия настройки</h5></a>'+
					'</div>'+
					'<div class="col-md-12 text-center">'+
						'<h5 class="my-3"><i class="fa-solid fa-bell"></i><a class="text-dark" href="">Уведомления</h5></a>'+
					'</div>'+
					'<div class="col-md-12 text-center">'+
						'<h5 class="my-3"><i class="fa-solid fa-coins"></i><a class="text-dark" href="">Данные память</h5></a>'+
					'</div>'+
					'<div class="col-md-12 text-center">'+
						'<h5 class="my-3"><i class="fa-solid fa-lock"></i><a class="text-dark" href=""></i>Конфиденйифльность</h5></a>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-md-9">'+
				'<div class="row">'+
					'<div class="col-md-12"><h4>Setting</h4></div>'+
					'<div class="col-md-12"><img src="https://avatars.mds.yandex.net/i?id=c44f171476e5061adea6e3cd61716d7d-5345282-images-thumbs&n=13=" width="100%" height="440"></div>'+
					'<div class="col-md-12"></div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';
var pen = 	'<div class="container-fluid">'+
		'<div class="row">'+
			'<div class="col-md-3">'+
				'<div class="row">'+
					'<div class="col-md-2">'+
						'<a class="text-dark" href="#" onclick="Setting();"><i class="fa-solid fa-arrow-left"></i></a>'+
					'</div>'+
					'<div class="col-md-10">'+
						'<h5>Изменрить профиль</h5>'+
					'</div>'+
					'<div class="col-md-12 text-center">'+
						'<img src="https://avatars.mds.yandex.net/i?id=6bf56b3e24ebbe8b49423cb26b11c7ba-4373654-images-thumbs&n=13" width="200" height="200" style="border-radius: 50%;">'+
					'</div>'+
					'<div class="col-md-12">'+
						'Имя'+
					'</div>'+
					'<div class="col-md-12">'+
						'<input class="form-control my-2" type="" name="" value="EunChong">'+
					'</div>'+
					'<div class="col-md-12">'+
						'Фамилия'+
					'</div>'+
					'<div class="col-md-12">'+
						'<input class="form-control my-2" type="" name="" value="Kim">'+
					'</div>'+
					'<div class="col-md-12">'+
						'О себе'+
					'</div>'+
					'<div class="col-md-12 my-2">'+
						'<input class="form-control my-2" type="" name="" value="...">'+
					'</div>'+
					'<div class="col-md-12" style="opacity: 0.5">'+
						'Любые подробности, например: возраст, род занятий или город.'+
						'Пример: 23 года, дизайнер из Санкт-Петербурга.'+
						'<hr style=" background-color: black">'+
					'</div>'+
					'<div class="col-md-12">'+
						'<h5>Имя пользователя</h5>'+
					'</div>'+
					'<div class="col-md-12 my-3">'+
						'<input class="form-control" type="" name="" placeholder="Имя пользователя">'+
					'</div>'+
					'<div class="col-md-12 ">'+
						'Вы можете выбрать публичное имя пользователя в Telegram. В этом случае другие люди смогут найти Вас по такому имени и связаться, не зная Вашего телефона.'+
					'</div>'+
					'<div class="col-md-12 my-5">'+
						'Вы можете использовать символы a–z, 0–9 и подчёркивания. Минимальная длина – 5 символов.'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-md-9">'+
				'<img src="https://phonoteka.org/uploads/posts/2021-07/1625101393_14-phonoteka_org-p-oboi-telegramm-standartnie-krasivo-14.jpg" width="100%" height="1000">'+
			'</div>'+
		'</div>'+
	'</div>';
document.getElementById('root').innerHTML=main;
function Main(){
	document.getElementById('root').innerHTML=main;
}
function Setting(){
	document.getElementById('root').innerHTML=setting;
}
function Pen(){
	document.getElementById('root').innerHTML=pen;
}