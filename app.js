// Shorthand notation to make life easier
const r = React.createElement;

// Compiled React code (jsx -> js) to go here.

// Verifying load order for testing (TODO: remove this)
console.log("App file ready!"); // Creates our bubble elements used in the day overview screen

class Custom extends React.Component {
  render() {
    if (this.props.type === "number") {
      let iconArray = [];

      for (var i; i < parseInt(this.props.value); i++) {
        console.log("This ran!");
        let icon = r("p", null, "This is type number");
        iconArray.push(bubble);
      }

      return {
        iconArray
      };
    } else if (this.props.type === "select") {
      return r("p", null, "This is type select");
    } else {
      return r("p", null, "This is type unknown");
    }
  }

} // Creates our bubble elements used in the day overview screen


class Bubble extends React.Component {
  render() {
    return r("div", {
      className: "bubble"
    }, r("h3", {
      className: this.props.propKey
    }, this.props.title), r("p", null, "You logged ", this.props.propValue, " ", this.props.quant, " for ", this.props.title.toLowerCase(), "."), r(Custom, {
      type: this.props.type,
      value: this.props.propValue
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
      type: thisObject.type
    }); // Pushes created bubble elements into our array dataElements

    dataElements.push(bubble);
  } // Renders the array of bubbles to the designated class


  ReactDOM.render( r("div", null, dataElements), document.getElementById('day-info'));
}
