// Verifying load order for testing (TODO: remove this)
console.log("App file ready!");

// On the day overview tab, under each category is some kind of visualization for the data
// This class creates the appropriate visualization depending on the type of data
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
	constructor(props) {
    		super(props);
    		this.handleClick = this.handleClick.bind(this);
	}

  	handleClick(e) {
		e.preventDefault();
		console.log('The link was clicked.');
	}
	
	render () {
		return (
			<a href="" className="bubble-link" onClick={this.handleClick}>
				<div className="bubble alert-blue">
					<p>You have not logged any information for this day. Would you like to do so now?</p>
				</div>
			</a>
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
		let alert = <AlertEnterDay />
		dataElements.push(alert);
	}
	// Renders the array of bubbles to the designated class
	ReactDOM.render(
		<div>{dataElements}</div>,
		document.getElementById('day-info')
	);
}

class NumberForm extends React.Component {
	constructor(props) {
    		super(props);
    		this.handleIncrease = this.handleIncrease.bind(this);
		this.handleDecrease = this.handleDecrease.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

  	handleIncrease(e) {
		e.preventDefault();
		console.log('This item incremented');
	}
	
	handleDecrease(e) {
		e.preventDefault();
		console.log('This item decremented');
	}
	
	handleClick(e) {
		e.preventDefault();
		console.log('This item clicked');
	}
	
	render () {
		return (
			<div className="icon-container">
                    		<div className="icon-row">
					<div className="icon-column icon-span4"><span className=""></span></div>
					<div className="icon-column icon-span4"><a onClick={this.handleIncrease} href=""><span className="material-icons-round">keyboard_arrow_up</span></a></div>
					<div className="icon-column icon-span4"><span className=""></span></div>
					<div className="icon-column icon-span4"><span className=""></span></div>
					<div className="icon-column icon-span4"><span className="material-icons-round">{this.props.icon}</span></div>
					<div className="icon-column icon-span4"><span className="number-log">{this.props.number}</span></div>
					<div className="icon-column icon-span4"><span className=""></span></div>
					<div className="icon-column icon-span4"><a onClick={this.handleDecrease} href=""><span className="material-icons-round">keyboard_arrow_down</span></a></div>
					<div className="icon-column icon-span4"><span className=""></span></div>
				</div>
			</div>
		);
	}
}


// Outlining this here at least for now.

// When the user *starts* entering the day, we need to do something specific:
// - figure out how many categories there are
//   - we'll first read from database, and then activate a callback function to proceed from there...


function createEnterForm(categoryObject, information = null, date, loadBar) {
	let categoryTitle = categoryObject.title;
	let categoryIcon = categoryObject.icon;
	let categoryType = categoryObject.type;
	
	if (categoryType === "icon-number") {
		let num = 0;
		if (information !== null) {
			//do something with dataValue
			console.log("we need to generate an icon-number field and populate " + information);
			number = information;
		} else {
			console.log("we need to generate an icon-number field");
			number = 0;
		}
		let form = <NumberForm 
			number={number}
			title = {categoryTitle}
			propDate = {date}
			propQuant = {categoryObject.quant}
			propQuants = {categoryObject.quants}
			icon = {categoryIcon}
		/>
		ReactDOM.render(
			form,
			document.getElementById('category-enter-screen')
		);
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
	let loadBar = determineEnterLoadingBar(categoryData);
	// For each category the user is tracking
	for (const [key, value] of Object.entries(categoryData)) {
		let keyword = key;
		let thisObject = searchArray(keyword, categories);
		// If there is no data
		if (data === "none") {
			// Create an empty form for this category
			//createEnterForm(thisObject, null, date, loadBar);
		// If there is data
		} else {
			// If the data contains information on this category
			if (data.hasOwnProperty(keyword)) {
				let dataValue = data[keyword];
				createEnterForm(thisObject, dataValue, date, loadBar);
				//createEnterForm(thisObject, dataValue, date, loadBar);
			// If not...
			} else {
				// Create an empty form for this category
				//createEnterForm(thisObject, null, date, loadBar);
			}
		}
	}
	
}

function retrieveDayInfo(date, data) {
	readDay(date, prepareEnterDay, data);
}




// Function to retrieve categories we're tracking

// Function to read database for specified date and creates array/object of categories and data (orders mood first)
	// Read database
	// For each item in categories array, fill data if it was found in the data retrieved from database (but check for mood first)
	// If data wasn't found, do something else we'll look for later
	// Return reordered array

// Function to when given a position in the array, and the array itself,
	// Do stuff SUSAN EDIT THIS FIRST

// Function to update the page, given data type, data (if it exists), loading bar, and date



// When user starts their log for a given day, we need to get: a list of categories we're going to be tracking and the date we're logging for
// We'll want to change the date on the screen for this

// Parameters date
// Return categories

// With this information, we need to search the database for information in any of those categories and keep all of this information together (maybe an array or something)
// If we do make this an array, we need to store the LACK of information reliably, maybe a codeword or just null, idk

// Parameters date, categories
// Return array of data

// This array then should be passed, unchanging, into a function to set up our log form. For each stage in the form, we need to load the appropriate data visualization option
// and if data exists, populate that into the form. If there is data in the mood section, we'll want to add a class to the overall container to style things the right color
// In addition to changing the visualization, click handlers need to do the correct thing... so it sounds like this whole piece needs to be react :(
// Need to see if the current category is first or last, and do unique things to the next/back buttons if so.
// Otherwise next/back buttons need to iterate to the next or previous category (this is complicated)

//

// During each screen if the user selects something new, update the database? Or only when they hit next? Maybe next

// On submit, return user to homescreen
