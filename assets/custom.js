function activate_sidebar() {
	// body...
	$(document).ready(function(){
		$('#menu-sidebar').click(function(){
			$('.ui.sidebar').sidebar('toggle');
		});		
	})
}

function activate_dropdown() {
	// body...
	$(document).ready(function(){
		$('.ui.selection.dropdown').click(function(){
			$('.ui.dropdown').dropdown('show');
		});		
	})
}