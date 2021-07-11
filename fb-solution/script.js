function checkUserInput() {
  var usernameInputElement = document.getElementById("username")
  var username = usernameInputElement.value;

  var passwordInputElement = document.getElementById("password");
  var password = passwordInputElement.value;

  if (password.length >= 6) {
    alert("Welcome to Facebook, " + username);
  } else {
    alert("Password should have atleast 6 characters");
  }
}