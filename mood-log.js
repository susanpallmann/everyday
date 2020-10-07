function updateDay(date, data) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            let uid = user.uid;
            var path = firebase.database().ref('users/' + uid + '/' + date);
            path.update(data);
        } else {
            // No user is signed in.
        }
    });    
}

function loadDay(date) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            let uid = user.uid;
            var path = firebase.database().ref('users/' + uid + '/' + date);
            path.on('value', function(snapshot) {
                if (date) {
                    let data = {};
                    // Do something with this data, send it to React
                    
                    snapshot.forEach((child) => {
                        let key = child.key;
                        let value = child.val();
                        // Do something with react
                        data[key] = value;
                    });
                    populateDay(date, data);
                } else {
                }
            });
        } else {
            // No user is signed in.
        }
    });  
}

$(document).ready(function() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    date = year + '-' + month + '-' + day;
    let data = {
        "aaa-mood": 4,
        "coffee": 3,
        "water": 0,
        "sleep": 8
    }
    loadDay(date);
});
