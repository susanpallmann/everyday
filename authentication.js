// Signs out an existing user from Firebase Authentication.
function logOutUser() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}

// Observes to determine if user is logged in or not.
function checkLogInStatus() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            $('body').attr('splash', 'false');
            initializeButtons();
        } else {
            // No user is signed in.
            $('body').attr('splash', 'true');
        }
    });
}

$(document).ready(function() {
    $("#log-in").submit(function(e){
        clearError($('#log-in'));
        firebase.auth().signInWithEmailAndPassword($('#log-in-email').val(), $('#log-in-password').val()).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // TODO: maybe convert to react idk man too many new things at once
            //$('#log-in').find('.error-message').text(errorMessage);
            appendError($('#log-in').find('.error-container'), errorMessage);
        });
        e.preventDefault();
    });
  
    $("#sign-up").submit(function(e){
        clearError($('#sign-up'));
        firebase.auth().createUserWithEmailAndPassword($('#sign-up-email').val(), $('#sign-up-password').val()).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // TODO: maybe convert to react idk man too many new things at once
            //$('#sign-up').find('.error-container').text(errorMessage);
            appendError($('#sign-up').find('.error-container'), errorMessage);
        });
        e.preventDefault();
    });
  
    $("#log-out").submit(function(e){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
        e.preventDefault();
    });
    
    checkLogInStatus();
});
