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
	
	function stopBubbling(e) {
		e.stopPropagation();
    		e.cancelBubble = true;
	}
	
	class DayOverview extends React.Component {
		constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}
		
		loadDay(value) {
			/*stopBubbling(this.event);*/
			console.log("clicked!");
			let oldDate = $('#day-overview').find('h2').text();
			let dateSeparated = oldDate.split("-");
			console.log(dateSeparated);
			let dateActual = new Date(parseInt(dateSeparated[0]), parseInt(dateSeparated[1]) - 1, parseInt(dateSeparated[2]));
			let dateNext = dateActual.setDate(dateActual.getDate() + value );
			let dateIntermediate = new Date(dateNext);
			console.log(dateIntermediate);
			let year = dateIntermediate.getFullYear();
			let month = dateIntermediate.getMonth() + 1;
			let day = dateIntermediate.getDate();
			let dateFormatted = year + '-' + month + '-' + day;
			readDay(dateFormatted, populateDataOverview);
		}
		
		
		render() {
			return r("div", {
      			id: ""
				
    		}, r("div", {
      			class: "arrow-previous"
				
    		}, r("span", {
      			href: "",
      			class: "previous-day",
			onClick: /*() => { 
				stopBubbling(this.handleClick);
				this.handleClick.loadDay(-1)*/
			}
				
    		}, r("span", {
      			class: "material-icons"
    			}, "chevron_left"))), 
					 
			   r("h2", null, date), 
					 
			   r("div", {
      			class: "arrow-next"
				
    		}, r("span", {
      			href: "",
      			class: "next-day",
			onClick: /*() => { 
				stopBubbling(this.handleClick);
				this.handleClick.loadDay(1)
			}*/
				
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
