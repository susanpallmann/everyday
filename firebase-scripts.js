function updateDay(date, data) {
    var user = firebase.auth().currentUser;

    if (user) {
        // User is signed in.
        console.log('signed in');
    } else {
        // No user is signed in.
        console.log('not signed in');
    }

    /*firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            let uid = user.uid;
            var path = firebase.database().ref('users/' + uid + '/' + date);
            path.update(data);
        } else {
            // No user is signed in.
        }
    }); */  
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
        "mood": 4,
        "coffee": 3,
        "water": 2,
        "sleep": 8
    }
    
    updateDay(date, data);
    
    /*
    loadDay(date);
    */
});
