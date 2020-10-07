function updateDay(date, data) {
    let user = firebase.auth().currentUser;
    let uid = user.uid;
    var path = firebase.database().ref('users/' + uid + date);
    path.push(data)
}

function loadDay(date) {
    let user = firebase.auth().currentUser;
    let uid = user.uid;
    var path = firebase.database().ref('users/' + uid + date);
    
    path.once('value', function(snapshot) {
        var date = snapshot.val();
        if (date) {
            snapshot.forEach((child) => {
                let key = child.key;
                let value = child.val();
                // Do something with react
            }
        } else {
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
        "mood": 4,
        "coffee": 3,
        "water": 0,
        "sleep": 8
    }
    updateDay(date, data);
});
