// Shorthand notation to make life easier
const r = React.createElement;

// Compiled React code (jsx -> js) to go here.

// Verifying load order for testing (TODO: remove this)
console.log("App file ready!"); 

class Custom extends React.Component {
  render() {
    if (this.props.type === "icon-number") {
      let iconArray = [];

      for (var i = 0; i < this.props.value; i++) {
        let icon = /*#__PURE__*/React.createElement("span", {
          className: "large-icon"
        }, this.props.propIcon);
        iconArray.push(icon);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "icon-set"
      }, iconArray);
    } else if (this.props.type === "number") {
      return /*#__PURE__*/React.createElement("div", {
        className: "icon-set"
      }, /*#__PURE__*/React.createElement("span", {
        className: "big-number"
      }, this.props.value));
    } else if (this.props.type === "mood") {
      let moodObject = searchArray("aaaMood", categories);
      let indexValue = moodObject.optionsText.indexOf(this.props.value);
      let moodIcon = moodObject.options[parseInt(indexValue)];
      return /*#__PURE__*/React.createElement("div", {
        className: "icon-set"
      }, /*#__PURE__*/React.createElement("span", {
        className: "large-icon"
      }, moodIcon));
    } else {
      return /*#__PURE__*/React.createElement("p", null, "This is type unknown");
    }
  }

}
// Creates our bubble elements used in the day overview screen

class Bubble extends React.Component {
  render() {
    let Object = searchArray(this.props.propKey, categories);
    var quant;
    if (this.props.propValue > 1 || this.props.propValue === 0) {
      quant = Object.quants;
    } else {
      quant = Object.quant;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "bubble"
    }, /*#__PURE__*/React.createElement("h3", {
      className: this.props.propKey
    }, this.props.title), /*#__PURE__*/React.createElement("p", null, "You logged ", this.props.propValue, " ", quant, " for ", this.props.title.toLowerCase(), "."), /*#__PURE__*/React.createElement(Custom, {
      type: this.props.type,
      value: this.props.propValue,
      propIcon: this.props.icon
    }));
  }

} // Searches to see if an object in the array specified has the value provided set as the "key"


function searchArray(word, array) {
  // For each item in the array (each category type)
  for (var i = 0; i < array.length; i++) {
    // If the value under key "keyword" is equal to var word
    if (array[i].keyword === word) {
      // Returns the object
      return array[i];
    }
  }
} // Function to render Day Overview section
// React JS is giving me a warning here, but my code still works and I don't negotiate with terrorists. 


function populateDayOverview(date, data) {
  let dataElements = []; // For each key/value passed in through parameter data (expected to be an object)

  for (const [key, value] of Object.entries(data)) {
    let keyword = key;
    let thisObject = searchArray(keyword, categories); // Creates bubble from our class Bubble, sending in some object properties as props

    let bubble = r(Bubble, {
      propKey: keyword,
      title: thisObject.title,
      quant: thisObject.quant,
      propValue: value,
      type: thisObject.type,
      icon: thisObject.icon
    }); // Pushes created bubble elements into our array dataElements

    dataElements.push(bubble);
  } // Renders the array of bubbles to the designated class


  ReactDOM.render( r("div", null, dataElements), document.getElementById('day-info'));
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
		// If there is data
		} else {
			// If the data contains information on this category
			if (data.hasOwnProperty(keyword)) {
				let dataValue = data.keyword;
				console.log("there is data stored for category " + keyword + " and it is " + dataVlalue);
			// If not...
			} else {
				console.log("although data exists for this date, there is no data stored for category " + keyword);
			}
		}
	}
	
}

function retrieveDayInfo(date, data) {
	readDay(date, prepareEnterDay, data);
}
