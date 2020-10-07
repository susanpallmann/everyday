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

function iconLookup(type) {
	switch(type) {
		case "water":
			return "local_bar";
		break;
		case "coffee":
			return "local_cafe";
		break;
		default:
			return "all_inclusive";
		break;
	}
}

function getInside(type, value) {
	if (type === "water" || type === "coffee") {
		var icon = iconLookup(type);
		value = parseInt(value);
		let types = [];
		for (i = 0; i < value; i++) {
			types.push(i);
		}
		let typesArray = types.map(singleType => r("span", {
			class: type + " large-icon"
		}, icon));
		return r('div', {class: "icon-set"}, typesArray);
	} else {
		return r('div', null, 'You logged "' + value + '" for ' + type + ' this day.');
	}
}

function populateDay(date, data) {
	ReactDOM.render(
		r("h2", null, date),
		document.getElementById('date')
	);
	class Information extends React.Component {
		render() {
			return r('div', {
				class: this.props.class + ' bubble',
				dataValue: this.props.dataValue,
			}, r('h3', null, this.props.class),
			   getInside(this.props.class, this.props.dataValue)
			);
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
