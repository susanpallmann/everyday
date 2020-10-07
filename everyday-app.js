/* Shorthand notation to make life easier */
const r = React.createElement;

$(document).ready(function() {	
});


function populateDataOverview(date, data) {
	class DayOverviewBubble extends React.Component {
		render() {
			return r('div', {
				class: this.props.class + ' bubble',
				dataValue: this.props.dataValue,
			}, r('h3', null, this.props.class),
			   r('p', null, 'You logged "' + this.props.dataValue + '" for ' + this.props.class + '.')
			);
		}
	}
	
	var originalData = data;
	var dataElements = Object.entries(originalData).map(([key,value])=> r(DayOverviewBubble, {
		class: key,
		dataValue: value.toString(),
	}));
	
	class DayOverview extends React.Component {
		
		render() {
			return r("div", {
      			id: ""
				
    		}, r("div", {
      			class: "arrow-previous"
				
    		}, r("a", {
      			href: "",
      			class: "previous-day"
				
    		}, r("span", {
      			class: "material-icons"
    			}, "chevron_left"))), 
					 
			   r("h2", null, date), 
					 
			   r("div", {
      			class: "arrow-next"
				
    		}, r("a", {
      			href: "",
      			class: "next-day"
				
    		}, r("span", {
      			class: "material-icons"
    			}, "chevron_right"))), 
					 
			   r("p", null, "Here's an overview of your log for this day."), 
					 
			   r("div", {
      			id: "day-info"
				},
				dataElements
			   )
			);
		}
		
	}
	ReactDOM.render(
		r(DayOverview, null),
		document.getElementById('day-overview')
	);
	initializeDayOverviewButtons();
}

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
	initializeDayButtons();
}
/* Magic Comment | */
