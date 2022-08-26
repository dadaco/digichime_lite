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
