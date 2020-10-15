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

  render() {
    return /*#__PURE__*/React.createElement("a", {
      href: "",
      className: "bubble-link",
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "bubble alert-blue"
    }, /*#__PURE__*/React.createElement("p", null, "You have not logged any information for this day. Would you like to do so now?")));
  }

}

// Searches to see if an object in the array specified has the value provided set as the "key"
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
  if (data !== "none") {
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
      } else {
	  let alert = /*#__PURE__*/React.createElement(AlertEnterDay, null);
	  dataElements.push(alert);
  }


  ReactDOM.render( r("div", null, dataElements), document.getElementById('day-info'));
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

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "icon-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("span", {
      className: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: this.handleIncrease,
      href: ""
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons-round"
    }, "keyboard_arrow_up"))), /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("span", {
      className: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("span", {
      className: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons-round"
    }, this.props.icon)), /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "number-log"
    }, this.props.number)), /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("span", {
      className: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: this.handleDecrease,
      href: ""
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons-round"
    }, "keyboard_arrow_down"))), /*#__PURE__*/React.createElement("div", {
      className: "icon-column icon-span4"
    }, /*#__PURE__*/React.createElement("span", {
      className: ""
    }))));
  }

} // Outlining this here at least for now.
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

    let form = /*#__PURE__*/React.createElement(NumberForm, {
      number: number,
      title: categoryTitle,
      propDate: date,
      propQuant: categoryObject.quant,
      propQuants: categoryObject.quants,
      icon: categoryIcon
    });
    ReactDOM.render(form, document.getElementById('category-enter-screen'));
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
  let loadBar = determineEnterLoadingBar(categoryData); // For each category the user is tracking

  for (const [key, value] of Object.entries(categoryData)) {
    let keyword = key;
    let thisObject = searchArray(keyword, categories); // If there is no data

    if (data === "none") {// Create an empty form for this category
      //createEnterForm(thisObject, null, date, loadBar);
      // If there is data
    } else {
      // If the data contains information on this category
      if (data.hasOwnProperty(keyword)) {
        let dataValue = data[keyword];
        createEnterForm(thisObject, dataValue, date, loadBar); //createEnterForm(thisObject, dataValue, date, loadBar);
        // If not...
      } else {// Create an empty form for this category
          //createEnterForm(thisObject, null, date, loadBar);
        }
    }
  }
}

function retrieveDayInfo(date, data) {
  readDay(date, prepareEnterDay, data);
} // readCategory("2020-10-11", retrieveDayInfo);
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
//   - ???
