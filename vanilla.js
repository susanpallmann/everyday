$(document).ready(function() {
});

function appendError(element, message) {
	element.append('<p class="error-message">' + message + '</p>');
}

function clearError(element) {
	element.find('.error-message').remove();
}
