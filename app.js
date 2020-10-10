// Shorthand notation to make life easier
const r = React.createElement;

// Compiled React code (jsx -> js) to go here.

// Verifying load order for testing (TODO: remove this)
console.log("App file ready!"); // Creates our bubble elements used in the day overview screen
class Custom extends React.Component {
  render() {
    if (this.props.type === "number") {
      let iconArray = [];
      console.log(this.props.propIcon);

      for (var i; i < this.props.value; i++) {
        //let icon = <span className="large-icon">{this.props.propIcon}</span>;
        let icon = /*#__PURE__*/React.createElement("span", null, this.props.propIcon);
        console.log("this ran");
        iconArray.push(icon);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "icon-set"
      }, iconArray);
    } else if (this.props.type === "select") {
      return /*#__PURE__*/React.createElement("p", null, "This is type select");
    } else {
      return /*#__PURE__*/React.createElement("p", null, "This is type unknown");
    }
  }

} // Creates our bubble elements used in the day overview screen


class Bubble extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "bubble"
    }, /*#__PURE__*/React.createElement("h3", {
      className: this.props.propKey
    }, this.props.title), /*#__PURE__*/React.createElement("p", null, "You logged ", this.props.propValue, " ", this.props.quant, " for ", this.props.title.toLowerCase(), "."), /*#__PURE__*/React.createElement(Custom, {
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
