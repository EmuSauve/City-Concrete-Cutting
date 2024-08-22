// Navigation

jQuery(document).ready(function ($) {

	$('.dropdown-toggle').click(function(e) {
		if ($(e.target).hasClass('link-menu')) {
			var location = $(this).attr('href');
			window.location.href = location;
			return false;
		}
		return true;
	});

});
