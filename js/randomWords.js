$(function() {

	//affichage aléatoire des phrases
	var mots= [
	'html 5 - CSS 3',
	'JavaScritpt - jQuery',
	'bootstrap',
	'Wordpress',
	'Angular',
	'Symfony',
	'CMS, frameworks',
	];

	var i=0;

	setInterval(function(){
		$('#mots').fadeOut(function(){
			$(this).html(mots[i=(i+1) % mots.length]).fadeIn();
		});
	},2000)
	
});