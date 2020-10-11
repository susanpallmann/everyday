// Verifying load order for testing (TODO: remove this)
console.log("App file ready!");

class Custom extends React.Component {
	render () {
		if (this.props.type === "icon-number") {
			let iconArray = [];
			console.log(this.props.value);
			for (var i = 0; i < this.props.value; i++) {
				let icon = <span className="large-icon">{this.props.propIcon}</span>;
				console.log("this ran");
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
			let moodIcon = moodObject.options[parseInt(this.props.value) - 1];
			console.log(moodIcon);
			return (
				<div className="icon-set">
					<p>This is special type mood</p>
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
		return (
			<div className="bubble">
				<h3 className={this.props.propKey}>{this.props.title}</h3>
				<p>You logged {this.props.propValue} {this.props.quant} for {this.props.title.toLowerCase()}.</p>
				<Custom type={this.props.type} value={this.props.propValue} propIcon={this.props.icon} />
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
	// Renders the array of bubbles to the designated class
	ReactDOM.render(
		<div>{dataElements}</div>,
		document.getElementById('day-info')
	);
}
