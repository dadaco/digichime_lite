$(function () {
  $('.js-btn').on('click', function () {
    $('header .wrap nav, .btn-line').toggleClass('open');
  })
});


function FixedAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1){
    $('header').addClass('fixed');
  }else{
    $('header').removeClass('fixed');
  }
}

$('header a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = Math.round($(elmHash).offset().top-60);
  $('body,html').animate({scrollTop: pos}, 500);
	if($('header .wrap nav').hasClass('open')){
		$('header .wrap nav, .btn-line').removeClass('open');
	}
  return false;
});

$('.movie a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = Math.round($(elmHash).offset().top-70);
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});

$(window).scroll(function () {
  FixedAnime();
});

$(window).on('load', function () {
  FixedAnime();
});

$(function() {
  $('#faq dl dd').not(':first').hide();
  $('#faq dl:first').addClass('active');
	$('#faq dl dt').on("click", function() {
		$(this).next('dd').slideToggle();
		$(this).parent('dl').toggleClass('active');
	});
});

$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});
