function loadPreviousDay() {
	console.log("clicked!");
	let oldDate = $('#day-overview').find('h2').text();
	let dateSeparated = oldDate.split("-");
	console.log(dateSeparated);
	let dateActual = new Date(parseInt(dateSeparated[0]), parseInt(dateSeparated[1]) - 1, parseInt(dateSeparated[2]));
	let dateNext = dateActual.setDate(dateActual.getDate() - 1 );
	let dateIntermediate = new Date(dateNext);
	console.log(dateIntermediate);
	let year = dateIntermediate.getFullYear();
	let month = dateIntermediate.getMonth() + 1;
	let day = dateIntermediate.getDate();
	let dateFormatted = year + '-' + month + '-' + day;
	readDay(dateFormatted, populateDataOverview);
}

function loadNextDay() {
	console.log("clicked!");
	let oldDate = $('#day-overview').find('h2').text();
	let dateSeparated = oldDate.split("-");
	console.log(dateSeparated);
	let dateActual = new Date(parseInt(dateSeparated[0]), parseInt(dateSeparated[1]) - 1, parseInt(dateSeparated[2]));
	let dateNext = dateActual.setDate(dateActual.getDate() + 1 );
	let dateIntermediate = new Date(dateNext);
	console.log(dateIntermediate);
	let year = dateIntermediate.getFullYear();
	let month = dateIntermediate.getMonth() + 1;
	let day = dateIntermediate.getDate();
	let dateFormatted = year + '-' + month + '-' + day;
	readDay(dateFormatted, populateDataOverview);
}
/*function initializeDayButtons() {
	console.log("initialized");
	$('.next-day').click(function(e) {
		let date = $('#day-overview').attr('day');
		if (date !== "default") {
			let dateSeparated = date.split("-");
			let dateActual = new Date(dateSeparated[0], dateSeparated[1] - 1, dateSeparated[2]);
			console.log(dateActual);
			let dateNext = dateActual.setDate(dateActual.getDate() + 1 );
			let year = dateNext.getFullYear();
			let month = dateNext.getMonth() + 1;
    			let day = dateNext.getDate();
			let dateFormatted = year + '-' + month + '-' + day;
			$('#day-overview').attr('day', dateFormatted);
		} else {
			console.log("else");
		}
		e.preventDefault();
	});
	
	$('.previous-day').click(function(e) {
		let date = $('#day-overview').attr('day');
		if (date !== "default") {
			let dateSeparated = date.split("-");
			let dateActual = new Date(dateSeparated[0], dateSeparated[1] - 1, dateSeparated[2]);
			console.log(dateActual);
			let dateNext = dateActual.setDate(dateActual.getDate() - 1 );
			let year = dateNext.getFullYear();
			let month = dateNext.getMonth() + 1;
    			let day = dateNext.getDate();
			let dateFormatted = year + '-' + month + '-' + day;
			$('#day-overview').attr('day', dateFormatted);
		} else {
			console.log("else");
		}
		e.preventDefault();
	});
}*/

$(document).ready(function() {
	$('.nav-log-in').click(function(e) {
		$('#splash-start').addClass('hide');
		$('#splash-log-in').removeClass('hide');
		$('#splash-sign-up').addClass('hide');
		e.preventDefault();
	});
	
	$('.nav-sign-up').click(function(e) {
		$('#splash-start').addClass('hide');
		$('#splash-log-in').addClass('hide');
		$('#splash-sign-up').removeClass('hide');
		e.preventDefault();
	});
	
	$('.nav-back').click(function(e) {
		$('#splash-log-in').addClass('hide');
		$('#splash-start').removeClass('hide');
		$('#splash-sign-up').addClass('hide');
		e.preventDefault();
	});
});

function appendError(element, message) {
	element.append('<p class="error-message">' + message + '</p>');
}

function clearError(element) {
	element.find('.error-message').remove();
}
