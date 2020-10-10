console.log("App file ready!");
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
	// For each item in the array
	console.log(array);
	console.log(word);
	for (var i=0; i < array.length; i++) {
		console.log(array[i]);
		// If the value under key "key" is equal to var keyword
		if (array[i].keyword === word) {
			// Returns the object
			console.log(array[i]);
			return array[i];
		}
// Else keeps iterating
	}
}

// Function to render Day Overview section
function populateDayOverview(date, data) {
	let dataElements = [];
	for (const [key, value] of Object.entries(data)) {
		let keyword = key;
		console.log(keyword);
		let thisObject = searchArray(keyword, categories);
		console.log(thisObject);
		console.log(thisObject.title);
		let bubble = <Bubble 
			propKey={keyword}
			title={thisObject.title}
			quant={thisObject.quant}
			propValue = {value}
		/>;
	dataElements.push(bubble);
	}
	ReactDOM.render(
		<div>{dataElements}</div>,
		document.getElementById('day-info')
	);
}
