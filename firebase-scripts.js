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
    
    class Bubble extends React.Component {
    render () {
      <div class="bubble">
        <h3 class={this.props.propKey + " bubble"}>{this.props.title}</h3>
        <p>You logged {this.props.propValue} {this.props.quant} for {this.props.title.toLowerCase()}.</p>
      </div>
    }
  }

  // Searches to see if an object in the array specified has the value provided set as the "key"
  function searchArray(keyword, array){
    // For each item in the array
    for (var i=0; i < array.length; i++) {
      // If the value under key "key" is equal to var keyword
      if (array[i].key === keyword) {
        // Returns the object
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
      let object = searchArray(keyword, categories);
      let bubble = <Bubble 
        propKey={keyword}
        title={object.title}
        quant={object.quant}
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
        "mood": 3,
        "coffee": 4,
        "water": 5,
        "sleep": 6
    };
    
    //console.log(updateDay(date, data, sendCallbackMessage));
    readDay(date, populateDayOverview);
    /*
    loadDay(date);
    */
});
