(function () {
	

	// Global variables

	var plugins = {

			scroller:$( '.scroll-wrap' ),
		};

		if (plugins.scroller.length) {
			for (var i = 0; i < plugins.scroller.length; i++) {
				var scrollerItem = $(plugins.scroller[i]);

				scrollerItem.mCustomScrollbar({
					theme: scrollerItem.attr('data-theme') ? scrollerItem.attr('data-theme') : 'minimal',
					scrollInertia: 100,
					scrollButtons: {enable: false}
				});
			}
		}
}());
