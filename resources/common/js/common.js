;(function($){
	'use strict';

	$(function(){
		var $wrapper = $(document).find('.j-wrapper'),
				$nav = $wrapper.find('.j-nav'),
				$navBtn = $nav.find('.j-nav_btn'),
				$navList = $nav.find('.j-nav_list');

		/* menu */
		$navBtn.on('click', function(){
			if($nav.hasClass('nav-active')){
				$nav.removeClass('nav-active');
			} else {
				$nav.addClass('nav-active');
			}
		});

		/* smooth scrolling */
		$('a[href^="#"]').on('click', function(){
			var target = $(this).attr('href');
			$('html, body').animate({scrollTop: $(target).offset().top}, 300);
			return false;
		});

		/* slider */
		if (!!$.fn.bxSlider){
			$('.j-bxslider').bxSlider({
				pager: false
			});
		}

		/* works */
		if(!!$.fn.mixItUp){
			$('.j-filters').mixItUp({
				layout: {
					display: 'block'
				}
			});
		}
	});
}(window.jQuery));

