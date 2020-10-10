$(document).ready(function() {
	// Changes splash view mode to display log in screen
	$('.nav-log-in').click(function(e) {
		/*$('#splash-start').addClass('hide');
		$('#splash-log-in').removeClass('hide');
		$('#splash-sign-up').addClass('hide');*/
		$('#splash-start').fadeOut(200);
		$('#splash-log-in').fadeIn(200);
		$('#splash-sign-up').fadeOut(200);
		e.preventDefault();
	});
	
	// Changes splash view mode to display sign up screen
	$('.nav-sign-up').click(function(e) {
		$('#splash-start').addClass('hide');
		$('#splash-log-in').addClass('hide');
		$('#splash-sign-up').removeClass('hide');
		e.preventDefault();
	});
	
	// Changes splash view mode to display main splash screen
	$('.nav-back').click(function(e) {
		$('#splash-log-in').addClass('hide');
		$('#splash-start').removeClass('hide');
		$('#splash-sign-up').addClass('hide');
		e.preventDefault();
	});
});

// Appends error message (parameter message) to a specific element (parameter element)
function appendError(element, message) {
	element.append('<p class="error-message">' + message + '</p>');
}

// Removes error message element from specific element (parameter element)
function clearError(element) {
	element.find('.error-message').remove();
}
