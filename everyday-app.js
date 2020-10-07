/* Shorthand notation to make life easier */
const r = React.createElement;

$(document).ready(function() {
	
	class Hello extends React.Component {
		render() {
			return r('h1', null, `Hello ${this.props.toWhat}`);
		}
	}

	ReactDOM.render(
	    r(Hello, {toWhat: 'World'}, null),
	    document.getElementById('app')
	);
	
	class Day extends React.Component {
		render() {
			return r('div', {
				class: this.props.class,
				valid: this.props.valid,
				filled: this.props.filled,
				mood: this.props.mood,
			});
		}
	}
	
	var dayArray = [
		{
			valid: "false",
			filled: "false",
			mood: null
		},
		{
			valid: "true",
			filled: "true",
			mood: 5
		},
		{
			valid: "true",
			filled: "false",
			mood: null
		},
		{
			valid: "true",
			filled: "true",
			mood: 3
		}
	];
	
	var dayElements = dayArray.map(day => r(Day, {
			class: "day",
			valid: day['valid'],
			filled: day['filled'],
			mood: day['mood']
		}));


	ReactDOM.render(
		r("div", null, dayElements),
		document.getElementById('calendar')
	);
	
	/*ReactDOM.render(
	    // Element
	    r(Day(null), null, null),
	    document.getElementById('calendar')
	);*/
	
});

function getInside(type, value) {
	switch(type) {
		case "mood" :
			return r('h1', null, 'Hello');
		break;
		case "coffee" :
			return r('h1', null, 'Hello');
		break;
		case "sleep" :
			return r('h1', null, 'Hello');
		break;
		case "water" :
		value = parseInt(value);
		let waters = [];
		for (var i; i < value; i++) {
			waters.push(r('div', {class: "water large-icon"}, "water"));
		}
		return waters;
		break;
	}
}

function populateDay(data) {
	class Information extends React.Component {
		render() {
			return r('div', {
				class: this.props.class + ' bubble',
				dataValue: this.props.dataValue,
			}, r('h3', null, this.props.class,
			   getInside(this.props.class, this.props.dataValue)
			));
		}
	}
	
	var dataEntries = Object.entries(data);
	var dataElements = dataEntries.map(property => r(Information, {
			class: property[0],
			dataValue: property[1],
	}));
	
	ReactDOM.render(
		r("div", null, dataElements),
		document.getElementById('day-info')
	);
}
/* Magic Comment | */
