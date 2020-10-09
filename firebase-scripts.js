function updateDay(date, data, callback) {
    var user = firebase.auth().currentUser;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            let uid = user.uid;
            var path = firebase.database().ref('users/' + uid + '/' + date);
            path.update(data, function () {callback(true)});
        } else {
            // No user is signed in.
            callback(false);
        }
    });
}

function sendCallbackMessage(string) {
    /*console.log(string);*/
    return string;
}

function readDay(date, callback) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            let uid = user.uid;
            var path = firebase.database().ref('users/' + uid + '/' + date);
            path.once('value', function(snapshot) {
                if (date) {
                    let data = {};
                    // Do something with this data, send it to React
                    snapshot.forEach((child) => {
                        let key = child.key;
                        let value = child.val();
                        // Do something with react
                        data[key] = value;
                    });
                    callback(date, data);
                } else {
                    callback(null, null);
                }
            });
        }
    });
}

/*function loadDay(date) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            let uid = user.uid;
            var path = firebase.database().ref('users/' + uid + '/' + date);
            path.once('value', function(snapshot) {
                if (date) {
                    let data = {};
                    // Do something with this data, send it to React

                    snapshot.forEach((child) => {
                        let key = child.key;
                        let value = child.val();
                        // Do something with react
                        data[key] = value;
                    });
                    $('#day-overview').attr('day', date);
                    populateDay(date, data);
                } else {
                }
            });
        } else {
            // No user is signed in.
        }
    });  
}*/

/*
once(eventType, successCallback, failureCallback) 	/* Promise<DataSnapshot> *//* once(eventType) */

$(document).ready(function() {
    
    var caffeine = {
	keyword: "caffeine",
	title: "Caffeine",
	categIcon: "local_cafe",
	icon: "local_cafe",
	type: "number",
	quant: "beverages"
};
var sleep = {
	keyword: "sleep",
	title: "Sleep",
	categIcon: "bedtime",
	icon: null,
	type: "number",
	quant: "hours"
};

var water = {
	keyword: "water",
	title: "Water",
	categIcon: "local_drink",
	icon: "local_drink",
	type: "number",
	quant: "cups"
};

var aaaMood = {
	keyword: "aaaMood",
	title: "Mood",
	categIcon: "mood",
	icon: "null",
	type: "select",
	options: [
		"sentiment_very_dissatisfied",
		"sentiment_dissatisfied",
		"sentiment_satisfied",
		"mood",
		"sentiment_very_satisfied"
	],
	quant: [
		"awful",
		"poor",
		"okay",
		"good",
		"great"
	]
};

var categories = [
	caffeine,
	sleep,
	water,
	aaaMood
];
    
    class Bubble extends React.Component {
    render () {
      return (
        <div class="bubble">
          <h3 class={this.props.propKey + " bubble"}>{this.props.title}</h3>
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
    
    
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    date = year + '-' + month + '-' + day;
    let data = {
        "aaaMood": 3,
        "caffeine": 4,
        "water": 5,
        "sleep": 6
    };
    
    console.log(updateDay(date, data, sendCallbackMessage));
    readDay(date, populateDayOverview);
    /*
    loadDay(date);
    */
});
