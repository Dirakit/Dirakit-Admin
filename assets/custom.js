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
		$('#project_filter').click(function(){
			$('#project_filter').dropdown();
		});

		$('#feed1').click(function(){
			$('#feed1').dropdown();
		});

		$('#feed2').click(function(){
			$('#feed2').dropdown();
		});		
	})
}
