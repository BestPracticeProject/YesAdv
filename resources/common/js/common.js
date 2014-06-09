;(function($){
	'use strict';

	/* trigger when page is ready */
	$(function(){
		var $wrapper = $(document).find('.j-wrapper'),
				$nav = $wrapper.find('.j-nav'),
				$navBtn = $nav.find('.j-nav_btn'),
				$navList = $nav.find('.j-nav_list');

		/* MENU */
		$navBtn.on('click', function(){
			var that = $(this);

			if($nav.hasClass('nav-active')){
				$nav.removeClass('nav-active');
			} else {
				$nav.addClass('nav-active');
			}
		});


		/* slider */
  	$('.bxslider').bxSlider({
  		pager: false
  	});

	});

	/* optional triggers
	$(window).load(function() {

	});

	$(window).resize(function() {

	});
	*/
}(window.jQuery));

