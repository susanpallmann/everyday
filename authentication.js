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
    } else {
      // No user is signed in.
      $('body').attr('splash', 'true');
    }
  });
  checkLogInStatus();
}

$(document).ready(function() {
    $("#log-in").submit(function(e){
        firebase.auth().signInWithEmailAndPassword($('#log-in-email').val(), $('#log-in-password').val()).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // TODO: maybe convert to react idk man too many new things at once
            $('#log-in').find('.error-message').text(errorMessage);
        });
        e.preventDefault();
    });
  
    $("#sign-up").submit(function(e){
        firebase.auth().createUserWithEmailAndPassword($('#sign-up-email').val(), $('#sign-up-password').val()).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // TODO: maybe convert to react idk man too many new things at once
            $('#sign-up').find('.error-message').text(errorMessage);
        });
        e.preventDefault();
    });
});
