$(function(){
	$('.close1').on('click', function(e){
		e.preventDefault();
			$('.content-1').addClass('content1--active');
			$('.title-1').addClass('title1--active');
		});
	$('.open1').on('click', function(e){
		e.preventDefault();
			$('.content-1').removeClass('content1--active');
			$('.title-1').removeClass('title1--active');
		});
	$('.close1').on('click', function(e){
		e.preventDefault();
			$('.close1').addClass('close1--none');
			$('.open1').addClass('open1--active');
		});	
	$('.open1').on('click', function(e){
		e.preventDefault();
			$('.close1').removeClass('close1--none');
			$('.open1').removeClass('open1--active');
		});


	


		$('.close2').on('click', function(e){
		e.preventDefault();
			$('.content-2').addClass('content2--active');
			$('.title-2').addClass('title2--active');
		});
	$('.open2').on('click', function(e){
		e.preventDefault();
			$('.content-2').removeClass('content2--active');
			$('.title-2').removeClass('title2--active');
		});
	$('.close2').on('click', function(e){
		e.preventDefault();
			$('.close2').addClass('close2--none');
			$('.open2').addClass('open2--active');
		});	
	$('.open2').on('click', function(e){
		e.preventDefault();
			$('.close2').removeClass('close2--none');
			$('.open2').removeClass('open2--active');
		});	



			$('.close3').on('click', function(e){
		e.preventDefault();
			$('.content-3').addClass('content3--active');
			$('.title-3').addClass('title3--active');
		});
	$('.open3').on('click', function(e){
		e.preventDefault();
			$('.content-3').removeClass('content3--active');
			$('.title-3').removeClass('title3--active');
		});
	$('.close3').on('click', function(e){
		e.preventDefault();
			$('.close3').addClass('close3--none');
			$('.open3').addClass('open3--active');
		});	
	$('.open3').on('click', function(e){
		e.preventDefault();
			$('.close3').removeClass('close3--none');
			$('.open3').removeClass('open3--active');
		});		
});
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.2,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
