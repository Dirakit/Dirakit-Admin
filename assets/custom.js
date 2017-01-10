function activate_sidebar() {
	// body...
	$(document).ready(function(){
		$('#menu-sidebar').click(function(){
			$('.ui.sidebar').sidebar('toggle');
		});		
	})
}