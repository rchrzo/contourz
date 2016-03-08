// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require hermitage
//= require jquery_ujs
//= require jquery-readyselector
//= require_tree .
//= require owl.carousel
//= require moment

$( document ).ready(function () {
	console.log("application!");
	var artistImgs = $('#artistslideshow');
	var gallImgs = $('#slides');

	function initCarousel(elem) {
		elem.owlCarousel({
		navigation : true, // Show next and prev button
	  	itemsDesktop : [1199,3],
	  	itemsDesktopSmall : [979,3]
		});
	}

	if(artistImgs.length) {
		initCarousel(artistImgs);
	} else if(gallImgs.length) {
		initCarousel(gallImgs);
	}

});
