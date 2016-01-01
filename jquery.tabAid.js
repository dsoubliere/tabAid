(function ($) {

    $.fn.extend({
		tabAid: function (custom) {
			var settings = {
				tabbing: '.tabAid',
				onClass: 'on'
			},
				currentTab = null;
			
			$.extend(settings, custom);
			$(this).on('keydown', function(e) {
				if (e.keyCode===9) {
					var tabs = $(settings.tabbing+', a, input'),
						nextTab = $(':focus');
					nextTab = tabs.eq( tabs.add(nextTab).index(nextTab)+1 );
					if (currentTab && !$.contains(currentTab[0], nextTab[0])) {
						currentTab.removeClass(settings.onClass);
					} if (nextTab.index(settings.tabbing)>-1) {
						nextTab.addClass(settings.onClass);
						currentTab = nextTab;
					}
				}
			});
		}
    });

})(jQuery);
