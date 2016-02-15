<script>
// Create a new Firebase reference, and a new instance of the Login client
var chatRef = new Firebase('https://barcrawl.firebaseio.com/chat');

function login() {
  chatRef.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
}

chatRef.onAuth(function(authData) {
  // Once authenticated, instantiate Firechat with our user id and user name
  if (authData) {
    initChat(authData);
  }
});
</script>

<a href='#' onclick='login();'>Login with Twitter</a>