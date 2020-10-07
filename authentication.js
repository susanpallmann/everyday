// Creates a new user in Firebase Authentication with provided email and password.
function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

// Logs in an existing user with Firebase Authentication given a provided email and password.
function logInUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

// Signs out an existing user from Firebase Authentication.
function logOutUser {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

/* Note: this part is called in everyday-app.js because it's used with React to change the webpage to/from the splash screen.

// Observes to determine if user is logged in or not.
function checkLogInStatus() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}
*/
