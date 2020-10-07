$(document).ready(function() {
	$('#nav-log-in').click(function(e) {
		$('splash-start').addClass('hide');
		$('splash-log-in').removeClass('hide');
		$('splash-sign-up').addClass('hide');
		e.preventDefault();
	});
	
	$('#nav-sign-up').click(function(e) {
		$('splash-start').addClass('hide');
		$('splash-log-in').addClass('hide');
		$('splash-sign-up').removeClass('hide');
		e.preventDefault();
	});
	
	$('#nav-back').click(function(e) {
		$('splash-log-in').addClass('hide');
		$('splash-start').removeClass('hide');
		$('splash-sign-up').addClass('hide');
		e.preventDefault();
	});
});

function appendError(element, message) {
	element.append('<p class="error-message">' + message + '</p>');
}

function clearError(element) {
	element.find('.error-message').remove();
}
