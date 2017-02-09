function sidebarController() {
	// body...
	$('#menu-sidebar').click(function(){
		if ($('.ui.sidebar').sidebar('is visible')) {
			$('.ui.sidebar').sidebar('hide');
			$('.pusher').css('margin-left','0%');
			$('.custom-header').css('width','100%');
			$('.ui.sidebar').sidebar({
				dimPage: false,
				closable: false,
			});
		}
		else if ($('.ui.sidebar').sidebar('is hidden')) {
			$('.ui.sidebar').sidebar('setting','transition','overlay');
			$('.ui.sidebar').sidebar('show');
			$('.pusher').css('margin-left','20%');
			$('.custom-header').css('width','80%');
		}
	});
}
