var login ='<div class="container-fluid bg-dark">'+
				'<div class="row">'+
					'<div class="col-6 text-center meta-4">'+
						'<img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png">'+
						'<img class="mt-5" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png">'+
					'</div>'+
					'<div class="col-3 mt-5 bg-light" style="border-style: solid;">'+
						'<div class="row">'+
							'<div class="col-12 text-center">'+
								'<img class="mt-5" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png">'+
								'<div class="col-12 mt-5">'+
									'<input id="login" class="form-control" type="" name="" placeholder="телефон">'+
									'<input id="password" class="form-control mt-1" type="" name="" placeholder="Пароль">'+
									'<button class="form-control bg-primary text-light mt-3" onclick="Main();" >Войти</button>'+
								'</div>'+
								'<div class="col-12 mt-2">'+
									'<div class="row">'+
										'<div class="col-5"><hr class="bg-dark"></div>'+
										'<div class="col-2">Или</div>'+
										'<div class="col-5"><hr class="bg-dark"></div>'+
									'</div>'+
								'</div>'+
								'<div class="col-12">'+
									'<a href=""><i class="fa-brands fa-facebook-square mr-3"></i>Войти через facebook</a>'+
									'<br>'+
									'<br><a href="" class="text-dark mt-5"><small>Забыли пароль?</small></a>'+
								'</div>'+
							'</div>'+
							'<div class="col-12 mt-3 text-center">'+
								'<small>У вас ещё нет аккаунта?<a href="">Зарегистрироваться</a></small>'+
							'</div>'+
							'<div class="col-12 mt-3 text-center">'+
								'Установите приложение.'+
							'</div>'+
							'<div class="col-12 text-center">'+
								'<img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_russian-ru.png/bfba6d0fd6bd.png" width="45%">'+
								'<img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_russian-ru.png/4c70948c09f3.png" width="45%">'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-3"></div>'+
				'</div>'+
			'</div>';
var main = '<div class="container-fluid">'+
				'<div class="row" style="border-bottom: 1px solid;">'+
					'<div class="col-5 text-center my-3">'+
						'<img src="https://www.instagram.com/static/images/web/	logged_out_wordmark.png/7a252de00b20.png" height="30">'+
					'</div>'+
					'<div class="col-3 my-3">'+
						'<input type="" name="" placeholder="Поиск" class="form-control">'+
					'</div>'+
					'<div class="col-1"></div>'+	
					'<div class="col-3 my-3">'+
						'<h5>'+
							'<i class="fa-solid fa-house"></i>'+
							'<a href="#" class="text-dark" onclick="Chat();"><i class="fa-solid fa-comment ml-3"></i></a>'+
							'<i class="fa-solid fa-square-plus ml-3"></i>'+
							'<a href="#" class= "text-dark" onclick="Compass();"><i class="fa-solid fa-compass ml-3"></i></a>'+
							'<i class="fa-solid fa-heart ml-3"></i>'+
							'<a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">'+
					          '<i class="fa-solid fa-user"></i>'+
					        '</a>'+
					        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
					          '<a class="dropdown-item" href="#" onclick="Profile();"><i class="fa-solid mr-1 fa-user"></i>Профил</a>'+
					          '<a class="dropdown-item" href="#"><i class="fa-solid mr-1 fa-bookmark"></i>Сохраненной</a>'+
					          '<a class="dropdown-item" href="#" onclick="Setting();"><i class="fa-solid mr-1 fa-gear"></i>Настройки</a>'+
					          '<a class="dropdown-item" href="#"><i class="fa-solid mr-1 fa-arrows-rotate"></i>Переключение</a>'+
					          '<div class="dropdown-divider"></div>'+
					          '<a class="dropdown-item" href="#">Выйти</a>'+
					        '</div>'+
						'</h5>'+
					'</div>'+
				'</div>'+
				'<div class="col-12">'+
					'<div class="row">'+
						'<div class="col-6 ml-5">'+
							'<div class="row">'+
								'<div class="col-12 my-3 text-center" style="border: 1px solid ; border-radius: 5px;">'+
									'<div class="row">'+
										'<div class="col-2" style="border-right: 1px solid;">'+
											'<img class="my-1" src="https://avatars.mds.yandex.net/i?id=836ed5fbf8f77d340d0745f51d6cc119-4570529-images-thumbs&n=13" width="50" height="50" style="border-radius: 50%;">'+
											'<br>'+
											'k_ez.1'+
										'</div>'+
										'<div class="col-2">'+
											'<img class="my-1" src="https://avatars.mds.yandex.net/i?id=4cdd542c0684a50c720272558d984fb1-5663910-images-thumbs&n=13" width="50" height="50" style="border-radius: 50%;">'+
											'<br>'+
											'j.farhoubek'+
										'</div>'+
										'<div class="col-2">'+
											'<img class="my-1" src="https://avatars.mds.yandex.net/i?id=102b90b1ebb124c60699881b1f45e506-4793215-images-thumbs&n=13" width="50" height="50" style="border-radius: 50%;">'+
											'<br>'+
											'flexliketomas'+
										'</div>'+
										'<div class="col-2">'+
											'<img class="my-1" src="https://avatars.mds.yandex.net/i?id=38d058c662d27c654b041e7ccf1243c6-6426292-images-thumbs&n=13" width="50" height="50" style="border-radius: 50%;">'+
											'<br>'+
											'2_zz_6'+
										'</div>'+
										'<div class="col-2">'+
											'<img class="my-1" src="1.jpg" width="50" height="50" style="border-radius: 50%;">'+
											'<br>'+
											'_thednl_'+
										'</div>'+
										'<div class="col-2 text-center">'+
											'<img class="my-1" src="2.jpg" width="50" height="50" style="border-radius: 50%;">'+
											'<br>'+
											'brunettlepr..'+
										'</div>'+
									'</div>'+
								'</div>	'+
							'</div>'+
							'<div class="row my-3" >'+
								'<div class="col-12 " style="border: 1px solid; border-radius: 5px;">'+
									'<div class="row">'+
										'<div class="col-1">'+
											'<img class="mt-1" src="file:///C:/Users/admin/Desktop/%D0%AD%D1%81%D1%80%D0%B0/52%20instagram/1.jpg" width="40" height="40" style="border-radius: 50%">'+
										'</div>'+
										'<div class="col-10 mt-2"><b>_thednl_</b></div>'+
										'<div class="col-1 mt-2"><i class="fa-solid fa-ellipsis-vertical"></i></div>'+
									'</div>'+
								'</div>'+
								'<div class="col-12 " style="border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid; border-radius: 5px;" >'+
									'<div class="row my-3">'+
										'<div class="col-12">'+
											'<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'+
											  '<div class="carousel-inner">'+
											    '<div class="carousel-item active">'+
											      '<img src="https://avatars.mds.yandex.net/i?id=e2fdf1b57239d332333ed90c7548d3b7-5229934-images-thumbs&n=13" width="100" height="400" class="d-block w-100" alt="...">'+
											    '</div>'+
											    '<div class="carousel-item">'+
											      '<img src="3.jpg" width="100" height="400" class="d-block w-100" alt="...">'+
											    '</div>'+
											    '<div class="carousel-item">'+
											      '<img src="4.jpg" class="d-block w-100" width="100" height="400" alt="...">'+
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
											'<div class="col-1 my-2 text-danger"><h5><i class="fa-solid fa-heart"></i></h5></div>'+
											'<div class="col-1 my-2"><h5><i class="fa-brands fa-facebook-messenger"></i></h5></div>'+
											'<div class="col-9 my-2"><h5><i class="fa-solid fa-paper-plane"></i></h5></div>'+
											'<div class="col-1 my-2"><h5><i class="fa-solid fa-bookmark"></i></h5></div>'+
											'<div class="col-12">1,123,123 отметок <b>"Нравится"</b></div>'+
											'<div class="col-12 my-3">natgeo Half the size of a house cat, with a bottlebrush tail and a cartoon-cute face striped with black, the güiña holds the record for smallest wildcat in the Americas.<br>Read the full story by Christine DellAmore at the link in bio. Video by Joel Sartore. Follow @joelsartore for more #PhotoArk.</div>'+
											'<div class="col-12" style="opacity: 0.5;">Посмотреть все коментарии (4,123)</div>'+
											'<div class="col-12 mt-3" style="opacity: 0.5;"><small>день назад</small></div>'+
									'</div>'+
								'</div>'+
									'<div class="col-12" style="border-right: 1px solid; border-left: 1px solid; border-bottom: 1px solid; border-radius: 5px;">'+
										'<div class="row">'+
											'<div class="col-1"><h5><i class=" mt-3 fa-solid fa-face-smile"></i></h5></div>'+
											'<div class="col-8 mt-2" style="opacity: 0.5;">Добавьте комемнтарии....</div>'+
											'<div class="col-3 mt-2 text-primary" style="opacity: 0.5;">Опубликовать</div>'+
										'</div>'+
									'</div>'+
							'</div>'+
							'<div class="row my-3" >'+
								'<div class="col-12 " style="border: 1px solid; border-radius: 5px;">'+
									'<div class="row">'+
										'<div class="col-1">'+
											'<img class="mt-1" src="https://avatars.mds.yandex.net/i?id=102b90b1ebb124c60699881b1f45e506-4793215-images-thumbs&n=13" width="40" height="40" style="border-radius: 50%">'+
										'</div>'+
										'<div class="col-10 mt-2"><b>flexliketomas</b></div>'+
										'<div class="col-1 mt-2"><i class="fa-solid fa-ellipsis-vertical"></i></div>'+
									'</div>'+
								'</div>'+
								'<div class="col-12 " style="border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid; border-radius: 5px;" >'+
									'<div class="row my-3">'+
										'<div class="col-12">'+
											'<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'+
											  '<div class="carousel-inner">'+
											    '<div class="carousel-item active">'+
											      '<img src="7.jpg" width="100" height="400" class="d-block w-100" alt="...">'+
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
											'<div class="col-1 my-2 text-danger"><h5><i class="fa-solid fa-heart"></i></h5></div>'+
											'<div class="col-1 my-2"><h5><i class="fa-brands fa-facebook-messenger"></i></h5></div>'+
											'<div class="col-9 my-2"><h5><i class="fa-solid fa-paper-plane"></i></h5></div>'+
											'<div class="col-1 my-2"><h5><i class="fa-solid fa-bookmark"></i></h5></div>'+
											'<div class="col-12">1,123,123 отметок <b>"Нравится"</b></div>'+
											'<div class="col-12 my-3">natgeo Half the size of a house cat, with a bottlebrush tail and a cartoon-cute face striped with black, the güiña holds the record for smallest wildcat in the Americas.<br>Read the full story by Christine DellAmore at the link in bio. Video by Joel Sartore. Follow @joelsartore for more #PhotoArk.</div>'+
											'<div class="col-12" style="opacity: 0.5;">Посмотреть все коментарии (4,123)</div>'+
											'<div class="col-12 mt-3" style="opacity: 0.5;"><small>день назад</small></div>'+
									'</div>'+
								'</div>'+
									'<div class="col-12" style="border-right: 1px solid; border-left: 1px solid; border-bottom: 1px solid; border-radius: 5px;">'+
										'<div class="row">'+
											'<div class="col-1"><h5><i class=" mt-3 fa-solid fa-face-smile"></i></h5></div>'+
											'<div class="col-8 mt-2" style="opacity: 0.5;">Добавьте комемнтарии....</div>'+
											'<div class="col-3 mt-2 text-primary" style="opacity: 0.5;">Опубликовать</div>'+
										'</div>'+
									'</div>'+
							'</div>'+
							'<div class="row my-3" >'+
								'<div class="col-12 " style="border: 1px solid; border-radius: 5px;">'+
									'<div class="row">'+
										'<div class="col-1">'+
											'<img class="mt-1" src="https://avatars.mds.yandex.net/i?id=38d058c662d27c654b041e7ccf1243c6-6426292-images-thumbs&n=13" width="40" height="40" style="border-radius: 50%">'+
										'</div>'+
										'<div class="col-10 mt-2"><b>2_zz_6</b></div>'+
										'<div class="col-1 mt-2"><i class="fa-solid fa-ellipsis-vertical"></i></div>	'+
									'</div>'+
								'</div>'+
								'<div class="col-12 " style="border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid; border-radius: 5px;" >'+
									'<div class="row my-3">'+
										'<div class="col-12">'+
											'<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'+
											  '<div class="carousel-inner">'+
											    '<div class="carousel-item active">'+
											      '<img  src="6.jpg" class="d-block  height="400" w-100" alt="...">'+
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
											'<div class="col-1 my-2 text-danger"><h5><i class="fa-solid fa-heart"></i></h5></div>'+
											'<div class="col-1 my-2"><h5><i class="fa-brands fa-facebook-messenger"></i></h5></div>'+
											'<div class="col-9 my-2"><h5><i class="fa-solid fa-paper-plane"></i></h5></div>'+
											'<div class="col-1 my-2"><h5><i class="fa-solid fa-bookmark"></i></h5></div>'+
											'<div class="col-12">1,123,123 отметок <b>"Нравится"</b></div>'+
											'<div class="col-12 my-3">natgeo Half the size of a house cat, with a bottlebrush tail and a cartoon-cute face striped with black, the güiña holds the record for smallest wildcat in the Americas.<br>Read the full story by Christine DellAmore at the link in bio. Video by Joel Sartore. Follow @joelsartore for more #PhotoArk.</div>'+
											'<div class="col-12" style="opacity: 0.5;">Посмотреть все коментарии (4,123)</div>'+
											'<div class="col-12 mt-3" style="opacity: 0.5;"><small>день назад</small></div>'+
									'</div>'+
								'</div>'+
									'<div class="col-12" style="border-right: 1px solid; border-left: 1px solid; border-bottom: 1px solid; border-radius: 5px;">'+
										'<div class="row">'+
											'<div class="col-1"><h5><i class=" mt-3 fa-solid fa-face-smile"></i></h5></div>'+
											'<div class="col-8 mt-2" style="opacity: 0.5;">Добавьте комемнтарии....</div>'+
											'<div class="col-3 mt-2 text-primary" style="opacity: 0.5;">Опубликовать</div>'+
										'</div>'+
									'</div>'+
							'</div>'+
							'<div class="row my-3" >'+
								'<div class="col-12 " style="border: 1px solid; border-radius: 5px;">'+
									'<div class="row">'+
										'<div class="col-1">'+
											'<img class="mt-1" src="https://avatars.mds.yandex.net/i?id=836ed5fbf8f77d340d0745f51d6cc119-4570529-images-thumbs&n=13" width="40" height="40" style="border-radius: 50%">'+
										'</div>'+
										'<div class="col-10 mt-2"><b>2_zz_6</b></div>'+
										'<div class="col-1 mt-2"><i class="fa-solid fa-ellipsis-vertical"></i></div>	'+
									'</div>'+
								'</div>'+
								'<div class="col-12 " style="border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid; border-radius: 5px;" >'+
									'<div class="row my-3">'+
										'<div class="col-12">'+
											'<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'+
											  '<div class="carousel-inner">'+
											    '<div class="carousel-item active">'+
											      '<img src="5.jpg" width="100" height="400" class="d-block w-100" alt="...">'+
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
											'<div class="col-1 my-2 text-danger"><h5><i class="fa-solid fa-heart"></i></h5></div>'+
											'<div class="col-1 my-2"><h5><i class="fa-brands fa-facebook-messenger"></i></h5></div>'+
											'<div class="col-9 my-2"><h5><i class="fa-solid fa-paper-plane"></i></h5></div>'+
											'<div class="col-1 my-2"><h5><i class="fa-solid fa-bookmark"></i></h5></div>'+
											'<div class="col-12">1,123,123 отметок <b>"Нравится"</b></div>'+
											'<div class="col-12 my-3">natgeo Half the size of a house cat, with a bottlebrush tail and a cartoon-cute face striped with black, the güiña holds the record for smallest wildcat in the Americas.<br>Read the full story by Christine DellAmore at the link in bio. Video by Joel Sartore. Follow @joelsartore for more #PhotoArk.</div>'+
											'<div class="col-12" style="opacity: 0.5;">Посмотреть все коментарии (4,123)</div>'+
											'<div class="col-12 mt-3" style="opacity: 0.5;"><small>день назад</small></div>'+
									'</div>'+
								'</div>'+
									'<div class="col-12" style="border-right: 1px solid; border-left: 1px solid; border-bottom: 1px solid; border-radius: 5px;">'+
										'<div class="row">'+
											'<div class="col-1"><h5><i class=" mt-3 fa-solid fa-face-smile"></i></h5></div>'+
											'<div class="col-8 mt-2" style="opacity: 0.5;">Добавьте комемнтарии....</div>'+
											'<div class="col-3 mt-2 text-primary" style="opacity: 0.5;">Опубликовать</div>'+
										'</div>'+
									'</div>'+
							  '</div>'+
						'</div>'+
						'<div class="col-5" style=" position: fixed; left: 750px;">'+
							'<div class="row">'+
								'<div class="col-2 mt-4 ml-3">'+
									'<a href="#" onclick="Profile();"><img src="https://avatars.mds.yandex.net/i?id=836ed5fbf8f77d340d0745f51d6cc119-4570529-images-thumbs&n=13" width="55" height="55" style="border-radius: 50%;"></a>'+
								'</div>'+
								'<div class="col-4" style="margin-top: 35px;"><b>k_ez.1</b></div>'+
								'<div class="col-5 text-primary" style="margin-top: 35px;">Переключиться</div>'+
								'<div class="col-9 ml-3 my-3" style="opacity: 0.5"><b>Рекомендация для вас</b></div>'+
								'<div class="col-2 my-3" style="opacity: 0.5;"><b>Все</b></div>'+
								'<div class="col-3 ml-3"><img style="border-radius: 50%;" src="4.jpg" width="40" height="40"></div>'+
								'<div class="col-5"> <b>w.aruuke</b><br><small>популярное</small></div>'+
								'<div class="col-3 text-primary">Подптсаться</div>'+
								'<div class="col-3 ml-3 my-2"><img style="border-radius: 50%;" src="1.jpg" width="40" height="40"></div>'+
								'<div class="col-5 my-2"> <b>justaizhaha</b><br><small>популярное</small></div>'+
								'<div class="col-3 my-2 text-primary">Подптсаться</div>'+
								'<div class="col-3 ml-3"><img style="border-radius: 50%;" src="7.jpg" width="40" height="40"></div>'+
								'<div class="col-5"> <b>_a.k.h.m_</b><br><small>популярное</small></div>'+
								'<div class="col-3 text-primary">Подптсаться</div>'+
								'<div class="col-3 ml-3 my-2"><img style="border-radius: 50%;" src="3.jpg" width="40" height="40"></div>'+
								'<div class="col-5 my-2"> <b>crucio.imperio</b><br><small>популярное</small></div>'+
								'<div class="col-3 my-2 text-primary">Подптсаться</div>'+
								'<div class="col-12 my-4" style="opacity: 0.3">'+
									'Информация Помощь Пресса APIВ акансии <br>Конфиденциальность Условия Места Язык Русский'+
								'</div>'+
								'<div class="col-12" style="opacity: 0.3">	'+
									'© 2022 INSTAGRAM FROM META'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
var profile = '<div class="container-fluid">'+
				'<div class="row" style="border-bottom: 1px solid;">'+
					'<div class="col-5 text-center my-3">'+
						'<img src="https://www.instagram.com/static/images/web/	logged_out_wordmark.png/7a252de00b20.png" height="30">'+
					'</div>'+
					'<div class="col-3 my-3">'+
						'<input type="" name="" placeholder="Поиск" class="form-control">'+
					'</div>'+
					'<div class="col-1"></div>'+
					'<div class="col-3 my-3">'+
						'<h5>'+
							'<a href="#" class="text-dark" onclick="Main();"><i class="fa-solid fa-house"></i></a>'+
							'<i class="fa-solid fa-comment ml-3"></i>'+
							'<i class="fa-solid fa-square-plus ml-3"></i>'+
							'<i class="fa-solid fa-compass ml-3"></i>'+
							'<i class="fa-solid fa-heart ml-3"></i>'+
							'<i class="fa-solid fa-user ml-3"></i>'+
						'</h5>'+
					'</div>'+
				'</div>'+
				'<div class="col-12">'+
						'<div class="row">'+
							'<div class="col-2"></div>'+
							'<div class="col-3 mt-3">'+
								'<img src="https://avatars.mds.yandex.net/i?id=cf7ab99cfa863f54df70f00d3151e386-4863507-images-thumbs&n=13" width="180" height="180" style="border-radius: 50%;">'+
							'</div>'+
							'<div class="col-4 mt-4">'+
								'<div class="row">'+
									'<div class="col-3">'+
									'<h3>K.ez_1</h3>'+
								'</div>'+
									'<div class="col-7">'+
										'<button class="bg-light text-dark ml-3">Редактировать профил</button>'+
									'</div>'+
									'<div class="col-2">'+
										'<i class="fa-solid fa-gear ml-3"></i>'+
									'</div>'+
									'<div class="col-4"><b>60публикации</b></div>'+
									'<div class="col-4"><b>129подписчиков</b></div>'+
									'<div class="col-4"><b>101подписок</b></div>'+
								'</div>'+
							'<div class="col-1"></div>'+
						'</div>'+
					'</div>'+
					'<div class="col-12">'+
						'<div class="row">'+
							'<div class="col-3"></div>'+
							'<div class="col-6">'+
								'<nav>'+
								  '<div class="nav nav-tabs" id="nav-tab" role="tablist">'+
								    '<a class="nav-link active text-dark" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fa-solid fa-table-cells mr-1"></i>ПУБЛИКАЦИИ</a>'+
								    '<a class="nav-link text-dark" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fa-solid fa-bookmark mr-1"> </i>СОХРАНЕНИЕ</a>'+
								    '<a class="nav-link text-dark" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i class="fa-solid fa-id-card-clip mr-1"> </i>ОТМЕТКИ</a>'+
								  '</div>'+
								'</nav>'+
								'<div class="tab-content" id="nav-tabContent">'+
								  '<div class="tab-pane fade show active text-center" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">'+
								  	'<h3><i class="fa-solid fa-table-cells mt-5"></i></h3>'+
								  	'ПУБЛИКАЦИИ'+
								  	'<br>'+
								  	'Сохраняйте фото и видео, которые хотите'+
								  	'<br> '+
								  	'посмотреть снова. Никто не получит уведомления об'+
								  	'<br>'+
								  	'этом, а сохраненные объекты сможете видеть только'+
								  	'<br> '+
								  	'вы.'+
								  '</div>'+
								  '<div class="tab-pane fade text-center" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">'+
								  	'<h3><i class="fa-solid fa-bookmark mt-5"></i></h3>'+
								  	'СОХРАНИТЬ'+
								  	'<br>'+
								  	'Сохраняйте фото и видео, которые хотите'+
								  	'<br> '+
								  	'посмотреть снова. Никто не получит уведомления об'+
								  	'<br>'+
								  	'этом, а сохраненные объекты сможете видеть только'+
								  	'<br> '+
								  	'вы.'+
								  '</div>'+
								  '<div class="tab-pane fade text-center" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">'+
								  	'<h3><i class="fa-solid fa-id-card-clip mt-5"></i></i></h3>'+
								  	'ОТМЕТКИ'+
								  	'<br>'+
								  	'Сохраняйте фото и видео, которые хотите'+
								  	'<br> '+
								  	'посмотреть снова. Никто не получит уведомления об'+
								  	'<br>'+
								  	'этом, а сохраненные объекты сможете видеть только'+
								  	'<br> '+
								  	'вы.'+
								  '</div>'+
								'</div>'+
							'</div>'+
							'<div class="col-3"></div>'+
						'</div>'+
					'</div>'+
				'</div>';
var setting = '<div class="container-fluid">'+
				'<div class="row" style="border-bottom: 1px solid;">'+
					'<div class="col-5 text-center my-3">'+
						'<img src="https://www.instagram.com/static/images/web/	logged_out_wordmark.png/7a252de00b20.png" height="30">'+
					'</div>'+
					'<div class="col-3 my-3">'+
						'<input type="" name="" placeholder="Поиск" class="form-control">'+
					'</div>'+
					'<div class="col-1"></div>'+
					'<div class="col-3 my-3">'+
						'<h5>'+
							'<a href="#" class="text-dark" onclick="Main();"><i class="fa-solid fa-house"></i></a>'+
							'<a href="#" class="text-dark" onclick="Chat();"><i class="fa-solid fa-comment ml-3"></i></a>'+
							'<i class="fa-solid fa-square-plus ml-3"></i>'+
							'<a href="#" class= "text-dark" onclick="Compass();"><i class="fa-solid fa-compass ml-3"></i></a>'+
							'<i class="fa-solid fa-heart ml-3"></i>'+
							'<a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">'+
					          '<i class="fa-solid fa-user"></i>'+
					        '</a>'+
					        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
					          '<a class="dropdown-item" href="#" onclick="Profile();"><i class="fa-solid mr-1 fa-user"></i>Профил</a>'+
					          '<a class="dropdown-item" href="#"><i class="fa-solid mr-1 fa-bookmark"></i>Сохраненной</a>'+
					          '<a class="dropdown-item" href="#" onclick="Setting();"><i class="fa-solid mr-1 fa-gear"></i>Настройки</a>'+
					          '<a class="dropdown-item" href="#"><i class="fa-solid mr-1 fa-arrows-rotate"></i>Переключение</a>'+
					          '<div class="dropdown-divider"></div>'+
					          '<a class="dropdown-item" href="#">Выйти</a>'+
					        '</div>'+
						'</h5>'+
					'</div>'+
				'</div>'+
				'<div class="col-12">'+
					'<div class="row">'+
						'<div class="col-2 mt-5"></div>'+
						'<div class="col-8 mt-5" style="border: 1px solid;">'+
							'<div class="row">'+
								'<div class="col-4" style="border-right: 1px solid;">'+
									'<div class="row">'+
										'<div class="col-12"><i class="text-primary fa-solid fa-infinity mr-1"></i><b>Meta</b></div>'+
										'<div class="col-12 mt-2"><b>Центр аккаунтов</b></div>'+
										'<div class="col-12 mt-2">'+
											'<small>Управляйте кросс-сервисными<br> функциями и настройками<br> аккаунтов на платформах Meta.</small>'+
										'</div>'+
										'<div class="col-12 mt-2">'+
											'<small>'+
												'<i class="fa-solid fa-lock mr-1"></i>Личная информация<br>'+
												'<i class="fa-solid fa-shield mr-1"></i>Пароль и безопасность<br>'+
												'<i class="fa-solid fa-folder-plus mr-1"></i>рекламные предпочтения'+
											'</small>'+
										'</div>'+
										'<div class="col-12 my-2">'+
											'<small class="text-primary">'+
												'Больше настроек в Центы<br> аккаунтов'+
											'</small>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'<div class="col-8">'+
									'<div class="row">'+
										'<div class="col-2 mt-4"></div>'+
										'<div class="col-2 mt-4">'+
											'<img src="https://haski-mana.ru/wp-content/uploads/5/a/a/5aa849c6dce4669aafa4230dfa0e5817.jpeg" width="50" height="50" style="border-radius: 50%;">'+
										'</div>'+
										'<div class="col-8 mt-4">'+
											'<b>K.ez_1</b><br><a href="#"class="text-primary">Изменить профиля</a>'+
										'</div>'+
										'<div class="col-1 mt-2"></div>'+
										'<div class="col-3 mt-2"><b>Веб-саит</b></div>'+
										'<div class="col-7 mt-2">'+
											'<input type="" name="" class="form-control" placeholder="Веб-саит">'+
										'</div>'+
										'<div class="col-1"></div>'+
										'<div class="col-1 mt-2"></div>'+
										'<div class="col-3 mt-2"><b>О себе</b></div>'+
										'<div class="col-7 mt-2"><textarea class="form-control"></textarea></div>'+
										'<div class="col-1 mt-2"></div>'+
										'<div class="col-1 mt-2"></div>'+
										'<div class="col-3 mt-2"><b>Пол</b></div>'+
										'<div class="col-7 mt-2">'+
											'<input type="" name="" class="form-control" placeholder="Пол">'+
											'<small>This won’t be part of your public profile</small>'+
										'</div>'+
										'<div class="col-1"></div>'+
										'<div class="col-1"></div>'+
										'<div class="col-3"><b>Рекомендации похожих аккаунтов</b></div>'+
										'<div class="col-6"><small><b>Рекомендовать ваш аккаунт возможным подписчикам.[?]</b></small></div>'+
										'<div class="col-2"></div>'+
										'<div class="col-12 my-3 text-center">'+
											'<button class="btn bg-primary text-light">отправить</button>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="col-2 mt-5"></div>'+
					'</div>'+
				'</div>'+
			'</div>';
var chat =	'<div class="container-fluid">'+
				'<div class="row" style="border-bottom: 1px solid;">'+
					'<div class="col-5 text-center my-3">'+
						'<img src="https://www.instagram.com/static/images/web/	logged_out_wordmark.png/7a252de00b20.png" height="30">'+
					'</div>'+
					'<div class="col-3 my-3">'+
						'<input type="" name="" placeholder="Поиск" class="form-control">'+
					'</div>'+
					'<div class="col-1"></div>'+
					'<div class="col-3 my-3">'+
						'<h5>'+
							'<a href="#" class="text-dark" onclick="Main();"><i class="fa-solid fa-house"></i></a>'+
							'<a href="#" class="text-dark" onclick="Chat();"><i class="fa-solid fa-comment ml-3"></i></a>'+
							'<i class="fa-solid fa-square-plus ml-3"></i>'+
							'<a href="#" class= "text-dark" onclick="Compass();"><i class="fa-solid fa-compass ml-3"></i></a>'+
							'<i class="fa-solid fa-heart ml-3"></i>'+
							'<a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">'+
					          '<i class="fa-solid fa-user"></i>'+
					        '</a>'+
					        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
					          '<a class="dropdown-item" href="#" onclick="Profile();"><i class="fa-solid mr-1 fa-user"></i>Профил</a>'+
					          '<a class="dropdown-item" href="#"><i class="fa-solid mr-1 fa-bookmark"></i>Сохраненной</a>'+
					          '<a class="dropdown-item" href="#" onclick="Setting();"><i class="fa-solid mr-1 fa-gear"></i>Настройки</a>'+
					          '<a class="dropdown-item" href="#"><i class="fa-solid mr-1 fa-arrows-rotate"></i>Переключение</a>'+
					          '<div class="dropdown-divider"></div>'+
					          '<a class="dropdown-item" href="#">Выйти</a>'+
					        '</div>'+
						'</h5>'+
					'</div>'+
				'</div>'+
				'<div class="col-12">'+
					'<div class="row">'+
						'<div class="col-2 mt-3"></div>'+
						'<div class="col-8 mt-3">'+
							'<div class="row">'+
								'<div class="col-5 text-center" style="border-left: 1px solid; border-top: 1px solid; border-bottom: 1px solid;">'+
									'<div class="row my-3">'+
										'<div class="col-10">'+
											'<b>K_ez.1</b><i class="fa-solid fa-chevron-down"></i>'+
										'</div>'+
										'<div class="col-2"><i class="fa-solid fa-pen-to-square"></i></div>'+
									'</div>'+
								'</div>'+
								'<div class="col-7" style="border: 1px solid;">'+
									'<div class="row my-3">'+
										'<div class="col-9">'+
											'<img src="https://avatars.mds.yandex.net/i?id=cf7ab99cfa863f54df70f00d3151e386-4863507-images-thumbs&n=13" width="30" height="30" style="border-radius: 50%;"><b class="ml-2">Kim Eun Chong</b>'+
										'</div>'+
										'<div class="col-3">'+
											'<h5>'+
												'<i class="fa-solid fa-phone"></i>'+
												'<i class="fa-solid fa-video ml-2"></i>'+
												'<i class="fa-solid fa-circle-info ml-2"></i>'+
											'</h5>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'<div class="col-5" style="border-left: 1px solid; border-bottom: 1px solid; height: 450px;">'+
									'<div class="row my-3">'+
										'<div class="col-12" style="background-color: #edebeb; border-radius: 10px;">'+
											'<div class="row my-2">'+
												'<div class="col-2"><img src="https://avatars.mds.yandex.net/i?id=cf7ab99cfa863f54df70f00d3151e386-4863507-images-thumbs&n=13" width="50" height="50" style="border-radius: 50% "></div>'+
												'<div class="col-10"> Kim Eun Chong <br><small>hellow * 49 мин</small></div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'<div class="col-7" style=" border-left: 1px solid; border-bottom: 1px solid; border-right: 1px solid;">'+
									'<div class="row my-3" id="chats">'+
										'<div class="col-12">'+
											'<div class="row">'+
												'<div class="col-9"></div>'+
												'<div class="col-2 text-center ml-2" style=" background-color: #ab7df5; border-radius: 10px;">Hellow</div>'+
											'</div>'+
										'</div>'+
										'<div class="col-12">'+
											'<div class="row">'+
												'<div class="col-2 text-center ml-2" style=" background-color: #ab7df5; border-radius: 10px;">Hi</div>'+
												'<div class="col-9"></div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'<div class="col-4" style="position: fixed; top: 500px; left: 630px; border: 1px solid; border-radius: 10px;">'+
										'<div class="row my-3">'+
											'<div class="col-1 mt-2"><h5><i class="fa-solid fa-face-smile"></i></h5></div>'+
											'<div class="col-5"><input id="text" class="form-control" type="text" name="" placeholder="напишите сообщение..."></div>'+
											'<div class="col-3">'+
												'<button class="bg-info form-control" onclick="message();">send</button>'+
											'</div>'+
											'<div class="col-1 mt-2"><h5><i class="fa-solid fa-image"></i></h5></div>'+
											'<div class="col-1 mr-3 mt-2"><h5><i class="fa-solid fa-heart"></i></h5></div>'+
										'</div>'+
									'</div>'
								'</div>'+
							'</div>'+
						'<div class="col-2 mt-3"></div>'+
					'</div>'+
				'</div>'+
			'</div>';
var compass = 	'<div class="container-fluid">'+
				'<div class="row" style="border-bottom: 1px solid;">'+
					'<div class="col-5 text-center my-3">'+
						'<img src="https://www.instagram.com/static/images/web/	logged_out_wordmark.png/7a252de00b20.png" height="30">'+
					'</div>'+
					'<div class="col-3 my-3">'+
						'<input type="" name="" placeholder="Поиск" class="form-control">'+
					'</div>'+
					'<div class="col-1"></div>'+
					'<div class="col-3 my-3">'+
						'<h5>'+
							'<a href="#" class=" text-dark" onclick="Main();"><i class="fa-solid fa-house"></i></a>'+
							'<a href="#" class="text-dark" onclick="Chat();"><i class="fa-solid fa-comment ml-3"></i></a>'+
							'<i class="fa-solid fa-square-plus ml-3"></i>'+
							'<a href="#" class= "text-dark" onclick="Compass();"><i class="fa-solid fa-compass ml-3"></i></a>'+
							'<i class="fa-solid fa-heart ml-3"></i>'+
							'<a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">'+
					          '<i class="fa-solid fa-user"></i>'+
					        '</a>'+
					        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
					          '<a class="dropdown-item" href="#" onclick="Profile();"><i class="fa-solid mr-1 fa-user"></i>Профил</a>'+
					          '<a class="dropdown-item" href="#"><i class="fa-solid mr-1 fa-bookmark"></i>Сохраненной</a>'+
					          '<a class="dropdown-item" href="#" onclick="Setting();"><i class="fa-solid mr-1 fa-gear"></i>Настройки</a>'+
					          '<a class="dropdown-item" href="#"><i class="fa-solid mr-1 fa-arrows-rotate"></i>Переключение</a>'+
					          '<div class="dropdown-divider"></div>'+
					          '<a class="dropdown-item" href="#">Выйти</a>'+
					        '</div>'+
						'</h5>'+
					'</div>'+
				'</div>'+				
				'<div class="col-12 mt-4">'+
					'<div class="row">'+
						'<div class="col-2"></div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=37bd1e8df2b4772186f55e078ea2b743-4355070-images-thumbs&n=13" width="100%" height="250">'+
							'<br>'+
							'<img class="mt-4" src="https://avatars.mds.yandex.net/i?id=ea1ae7a832bf877eb5bf312c445e1e65-5204674-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-6">'+
							'<img src="https://avatars.mds.yandex.net/i?id=4ea324db8023149c2bc1cb082de6295b-5310207-images-thumbs&n=13" width="100%" height="524">'+
						'</div>'+
						'<div class="col-1"></div>'+
					'</div>'+
				'</div>'+
				'<div class="col-12 mt-4">'+
					'<div class="row">'+
						'<div class="col-2"></div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=c62bf30256b12ae1de544647674d88d0-4547856-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=2cf68932a76c3f068abc096356623825-5910984-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=80565ef25aab0be9408d897992c4840d-5496696-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-2"></div>		'+
					'</div>'+
				'</div>'+
				'<div class="col-12 mt-4">'+
					'<div class="row">'+
						'<div class="col-2"></div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=f3356ded1d050505dd75773bc8ae4a6e-5234915-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=c5e1f4d92d32664fe02826f41f89ea49-5734463-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=7031ca1b18da3a97e8af0b8e0e5fc02c-5650815-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-2"></div>'+
					'</div>'+
				'</div>'+
				'<div class="col-12 mt-4">'+
					'<div class="row">'+
						'<div class="col-2"></div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=4657cf50d34e807cc15d14d81473c8c9-3584061-images-thumbs&n=13" width="100%" height="250">'+
							'<br>'+
							'<img class="mt-4" src="https://avatars.mds.yandex.net/i?id=f2940721c689975c49d071409a153768-5334840-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-6">'+
							'<img src="https://avatars.mds.yandex.net/i?id=dc4a947e07c44afd3682bf6492a97aaa-4431925-images-thumbs&n=13" width="100%" height="524">'+
						'</div>'+
						'<div class="col-1"></div>'+
					'</div>'+
				'</div>'+
				'<div class="col-12 mt-4">'+
					'<div class="row">'+
						'<div class="col-2"></div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=dce744ad52953dde938921ece116b400-4591401-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=12e2c5c1cd1f92b0f081059938b3145f-3028206-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=39de6343cb5bfb871379cd4aa0e1cdd9-5734356-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-2"></div>'+
					'</div>'+
				'</div>'+
				'<div class="col-12 mt-4">'+
					'<div class="row">'+
						'<div class="col-2"></div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=c59002b4234504ae0dcda97351be94b8-5345374-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=310a2f63b42176b8002c5519717503c6-4034527-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-3">'+
							'<img src="https://avatars.mds.yandex.net/i?id=ea1ae7a832bf877eb5bf312c445e1e65-5204674-images-thumbs&n=13" width="100%" height="250">'+
						'</div>'+
						'<div class="col-2"></div>		'+
					'</div>'+
				'</div>'+
			'</div>';
document.getElementById('root').innerHTML = login;
function Login(){
	document.getElementById('root').innerHTML=login;
}
function Main(){
	var login = document.getElementById('login').value;
	var password = document.getElementById('password').value;
	if(login == "qq" && password == "ww"){
	document.getElementById('root').innerHTML=main;
}else{
	alert("Неправильный логин или пароль!");
}
}
function Main(){
	document.getElementById('root').innerHTML = main;
}
function Profile(){
	document.getElementById('root').innerHTML = profile;
}
function Setting(){
	document.getElementById('root').innerHTML = setting;
}
function Chat(){
	document.getElementById('root').innerHTML= chat;
}
var arr = [];
var x = 0; 
function message(){
	var text = document.getElementById('text').value;
	arr[x] = text;
	x++;
	alert("Отправлено");
	var messages="";
	for (var i = 0; i < arr.length; i++) {
		messages += '<div class="col-12 mt-2">'+
						'<div class="row">'+
							'<div class="col-9"></div>'+
							'<div class="col-2 text-center ml-2" style=" background-color: #ab7df5; border-radius: 10px;">'+arr[i]+'</div>'+
						'</div>'+
					'</div>';
	}
	document.getElementById('chats').innerHTML = messages;
}
function Compass(){
	document.getElementById('root').innerHTML = compass;
}
