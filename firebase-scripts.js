// Default function for optional callbacks
function nocallback() {
}

// Sends information (parameter data, expected to be an object) about a specific date (parameter date) to the database
function updateDay(date, data, callback = nocallback) {

    // First checks authentication to prevent the user from writing to any directory other than
    // the one associated with their user ID.
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            let uid = user.uid;
            // Update info at specific path
            var path = firebase.database().ref('users/' + uid + '/' + date);
            path.update(data, function () {callback(true)});
        } else {
            // No user is signed in.
            callback(false);
        }
    });
}

// Retrieves information from database about a specific date (parameter date), calls React script to load page (app.js)
function readDay(date, callback) {
    $('#written-date').text(date);
    // First checks authentication to prevent the user from reading any directory other than
    // the one associated with their user ID.
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            let uid = user.uid;
            var path = firebase.database().ref('users/' + uid + '/' + date);
            // Takes snapshot of data at this particular path
            path.once('value', function(snapshot) {
                if (date) {
                    // Creating object "data" from each pair of key/values
                    let data = {};
                    snapshot.forEach((child) => {
                        let key = child.key;
                        let value = child.val();
                        data[key] = value;
                    });
                    // Pass in function to call React script here (populateDayOverview)
                    callback(date, data);
                } else {
                    callback(null, {exists: false});
                }
            });
        }
    });
}

$(document).ready(function() {
    // Verifying load order for testing (TODO: remove this)
    console.log("Firebase JS file ready!");
    
    // Entering some info so that I am guaranteed to have data for the day I'm looking up for testing (TODO: remove this)
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
    
    let data2 = {
        "aaaMood": 1,
        "caffeine": 2,
        "water": 3,
        "sleep": 4
    };
    
    let data3 = {
        "aaaMood": 8,
        "caffeine": 8,
        "water": 8,
        "sleep": 8
    };
    updateDay(date, data);
    updateDay("2020-10-11", data2);
    updateDay("2020-10-9", data3);
    readDay(date, populateDayOverview);
});
