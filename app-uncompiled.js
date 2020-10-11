// Verifying load order for testing (TODO: remove this)
console.log("App file ready!");

class Custom extends React.Component {
	render () {
		if (this.props.type === "icon-number") {
			let iconArray = [];
			for (var i = 0; i < this.props.value; i++) {
				let icon = <span className="large-icon">{this.props.propIcon}</span>;
				iconArray.push(icon);
			}
			return (
				<div className="icon-set">{iconArray}</div>
			);
		} else if (this.props.type === "number") {
			return (
				<div className="icon-set">
					<span className="big-number">{this.props.value}</span>
				</div>
			);
		} else if (this.props.type === "mood") {
			let moodObject = searchArray("aaaMood", categories);
			let indexValue = moodObject.optionsText.indexOf(this.props.value);
			let moodIcon = moodObject.options[parseInt(indexValue)];
			return (
				<div className="icon-set">
					<span className="large-icon">{moodIcon}</span>
				</div>
			);
		} else {
			return (
				<p>This is type unknown</p>
			);
		}
	}
}

// Creates our bubble elements used in the day overview screen
class Bubble extends React.Component {
	render () {
		let Object = searchArray(this.props.propKey, categories);
		var quant;
		if (this.props.propValue > 1 || this.props.propValue === 0) {
			quant = Object.quants;
		} else {
			quant = Object.quant;
		}
		return (
			<div className="bubble">
				<h3 className={this.props.propKey}>{this.props.title}</h3>
				<p>You logged {this.props.propValue} {quant} for {this.props.title.toLowerCase()}.</p>
				<Custom type={this.props.type} value={this.props.propValue} propIcon={this.props.icon} />
			</div>
		);
	}
}

class AlertEnterDay extends React.Component {
	render () {
		return (
			<div className="bubble alert-blue">
				<p>You have not logged any information for this day. Would you like to do so now?</p>
			</div>
		);
	}
}

// Searches to see if an object in the array specified has the value provided set as the "key"
function searchArray(word, array){
	// For each item in the array (each category type)
	for (var i=0; i < array.length; i++) {
		// If the value under key "keyword" is equal to var word
		if (array[i].keyword === word) {
			// Returns the object
			return array[i];
		}
	}
}

// Function to render Day Overview section
// React JS is giving me a warning here, but my code still works and I don't negotiate with terrorists. 
function populateDayOverview(date, data) {
	let dataElements = [];
	if (data !== "none") {
		// For each key/value passed in through parameter data (expected to be an object)
		for (const [key, value] of Object.entries(data)) {
			let keyword = key;
			let thisObject = searchArray(keyword, categories);
			// Creates bubble from our class Bubble, sending in some object properties as props
			let bubble = <Bubble 
				propKey={keyword}
				title={thisObject.title}
				quant={thisObject.quant}
				propValue = {value}
				type = {thisObject.type}
				icon = {thisObject.icon}
			/>;
		// Pushes created bubble elements into our array dataElements
		dataElements.push(bubble);
		}
	} else {
		console.log("There is no data");
		let alert = <AlertEnterDay />
		dataElements.push(alert);
	}
	// Renders the array of bubbles to the designated class
	ReactDOM.render(
		<div>{dataElements}</div>,
		document.getElementById('day-info')
	);
}








// Outlining this here at least for now.

// When the user *starts* entering the day, we need to do something specific:
// - figure out how many categories there are
//   - we'll first read from database, and then activate a callback function to proceed from there...


function createEnterForm(categoryObject, information = null) {
	let categoryTitle = categoryObject.title;
	let categoryIcon = categoryObject.icon;
	let categoryType = categoryObject.type;
	
	if (categoryType === "icon-number") {
		if (information !== null) {
			//do something with dataValue
			console.log("we need to generate an icon-number field and populate " + information);
		} else {
			console.log("we need to generate an icon-number field");
		}
	} else if (categoryType === "number") {
		if (information !== null) {
			//do something with dataValue
			console.log("we need to generate a number field and populate " + information);
		} else {
			console.log("we need to generate a number field");
		}
	} else if (categoryType === "mood") {
		if (information !== null) {
			//do something with dataValue
			console.log("we need to generate a mood field and populate " + information);
		} else {
			console.log("we need to generate a mood field");
		}
	} else {
		if (information !== null) {
			//do something with dataValue
			console.log("we need to generate an unknown field and populate " + information);
		} else {
			console.log("we need to generate an unknown field");
		}
	}
}

function prepareEnterDay(date, data, categoryData) {
	let dataElements = [];
	// For each category the user is tracking
	for (const [key, value] of Object.entries(categoryData)) {
		let keyword = key;
		let thisObject = searchArray(keyword, categories);
		// If there is no data
		if (data === "none") {
			console.log("there is no data stored here");
			// Create an empty form for this category
			createEnterForm(thisObject, null);
		// If there is data
		} else {
			// If the data contains information on this category
			if (data.hasOwnProperty(keyword)) {
				let dataValue = data[keyword];
				console.log("there is data stored for category " + keyword + " and it is " + dataValue);
				// Create a filled form for this category
				createEnterForm(thisObject, dataValue);
			// If not...
			} else {
				console.log("although data exists for this date, there is no data stored for category " + keyword);
				// Create an empty form for this category
				createEnterForm(thisObject, null);
			}
		}
	}
	
}

function retrieveDayInfo(date, data) {
	readDay(date, prepareEnterDay, data);
}

// readCategory("2020-10-11", retrieveDayInfo);
// returns date ("2020-10-11", {something}, {categories}


// Given data passed in (already filtered out false values)

// - figure out how many/what loading bar increments we need to do (just some math, and maybe we'll want a limit on how many categories someone can track)
//   - we'll want to pass on each increment on with our category values to the next function so the callback will need to take two parameters

// Once we have out values we want to pass those on to the React part responsible for rendering
// - For each category:
//   - Get type from categories array
//   - Do something specific to that type
//   - Increment the loading bar (unless first category)
//   - Check firebase to see if data exists under this category, update accordingly
//   - Display in React
//   - then initialize click handlers?
//   - onClick of options / on fill of forms?, update database


function ActionLink() {
  function handleClick(e) {    e.preventDefault();    console.log('The link was clicked.');  }
  return (
    <a href="#" onClick={handleClick}>      Click me
    </a>
  );
}
