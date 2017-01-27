function activate_feature() {
	// body...
	$(document).ready(function(){
		$('#menu-sidebar').click(function(){
			$('.ui.sidebar').sidebar('toggle');
		});
		$('.dropdown').dropdown();		
	})
}
