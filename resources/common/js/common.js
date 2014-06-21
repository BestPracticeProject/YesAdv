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
        if (!!$.fn.bxSlider){
            $('.bxslider').bxSlider({
                pager: false
            });
        }

		/* works */
		$worksCategories.on('click', '.j-cat_btn', function(){
			var that = $(this);
			if(!that.hasClass('m-wtypes__btn-active')){
				var category = that.attr("href"),
					$listWorks = $worksExample.find('.j-work'),
					amountOfWorks = $listWorks.length,
					$reserv = $works.find('.j-works_reserv');

					$.each($listWorks, function(index, val) {
						var work = $(this);

						if(work.data('cat') != category){
							var i = work.addClass('witem-hidden').detach();
							i.appendTo($reserv);
						} else {
							work.removeClass('witem-hidden');
						}
					});



			};
			return false;
		});


	});

	/* optional triggers
	$(window).load(function() {

	});

	$(window).resize(function() {

	});
	*/
}(window.jQuery));

