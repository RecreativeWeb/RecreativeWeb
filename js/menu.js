$(function() {

	$('.hamburger-icon-open').on('click', function() {
		$('.translate').removeClass('close');
		$('.translate').addClass('open');
	});

	$('.hamburger-icon-close').on('click', function() {
		$('.translate').addClass('close');
		$('.translate').removeClass('open');
	});

	$('nav a').on('click', function() {
		$('.translate').addClass('close');
		$('.translate').removeClass('open');
	});
	
});