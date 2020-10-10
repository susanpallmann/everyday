// Verifying load order for testing (TODO: remove this)
console.log("App file ready!");
// Creates our bubble elements used in the day overview screen
class Bubble extends React.Component {
	render () {
		return (
			<div className="bubble">
				<h3 className={this.props.propKey}>{this.props.title}</h3>
				<p>You logged {this.props.propValue} {this.props.quant} for {this.props.title.toLowerCase()}.</p>
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
