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
