;(function($){
	'use strict';

	/* trigger when page is ready */
	$(function(){
		var $wrapper = $(document).find('.j-wrapper'),
				$nav = $wrapper.find('.j-nav'),
				$navBtn = $nav.find('.j-nav_btn'),
				$navList = $nav.find('.j-nav_list'),
				$works = $wrapper.find('.j-works'),
				$worksCategories = $works.find('.j-w_category'),
				$worksExample = $works.find('.j-w_examples');

		/* MENU */
		$navBtn.on('click', function(){
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

		/* works */
		if(!!$.fn.mixItUp){
			$('.j-filters').mixItUp();
		}

	});

	/* optional triggers
	$(window).load(function() {

	});

	$(window).resize(function() {

	});
	*/
}(window.jQuery));

