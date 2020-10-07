function initializeButtons() {
	$(document).on('click', '.next-day', function(e) {
		console.log("this ran");
		/*let date = $('#day-overview').attr('day');
		console.log(date);
		if (date !== "default") {
			let dateSeparated = date.split("-");
			let dateActual = new Date(dateSeparated[0], dateSeparated[1] - 1, dateSeparated[2]);
			console.log(dateActual);
			loadDay(date);
		} else {
			console.log("else");
		}*/
		e.preventDefault();
		e.stopPropogation();
		console.log("test?");
		//return false;
	});
}

$(document).ready(function() {
	$('.nav-log-in').click(function(e) {
		$('#splash-start').addClass('hide');
		$('#splash-log-in').removeClass('hide');
		$('#splash-sign-up').addClass('hide');
		initializeButtons();
		e.preventDefault();
	});
	
	$('.nav-sign-up').click(function(e) {
		$('#splash-start').addClass('hide');
		$('#splash-log-in').addClass('hide');
		$('#splash-sign-up').removeClass('hide');
		initializeButtons();
		e.preventDefault();
	});
	
	$('.nav-back').click(function(e) {
		$('#splash-log-in').addClass('hide');
		$('#splash-start').removeClass('hide');
		$('#splash-sign-up').addClass('hide');
		initializeButtons();
		e.preventDefault();
	});
});

function appendError(element, message) {
	element.append('<p class="error-message">' + message + '</p>');
}

function clearError(element) {
	element.find('.error-message').remove();
}
