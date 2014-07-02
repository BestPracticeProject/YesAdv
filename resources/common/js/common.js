;(function($){
	'use strict';

	$.fn.extend({
		setEqualHeight: function(){
			var maxHeight = 0,
				$elem = this;

			$elem.each(function(){
				if ( $(this).height() > maxHeight ) {
					maxHeight = $(this).outerHeight();
				}
			})

			$elem.height(maxHeight);

			return this;
		}
	});



	var $cols = $('.j-set_height').find('.j-col');

	function getWindowWidth(){
		return (window.innerWidth !== undefined) ? window.innerWidth : (document.documentElement || document.body).clientWidth;
	}


	$(function(){
		var widthW = getWindowWidth();

		if(widthW > 980){
			$cols.setEqualHeight();
		}

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

	$(window).resize(function() {
		var widthW = getWindowWidth();

		if (widthW >= 980) {
			$cols.setEqualHeight()
		} else {
			$cols.height('auto');
		}

	});
}(window.jQuery));

