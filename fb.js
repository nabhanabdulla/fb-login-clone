// function checkUserInput() {
//   var usernameInputElement = document.getElementById("username");
//   var username = usernameInputElement.value;

//   var passwordInputElement = document.getElementById("password");
//   var password = passwordInputElement.value;

//   if (password.length >= 6) {
//     alert("Welcome to Facebook, " + username);
//   } else {
//     alert("Password should have atleast 6 characters");
//   }
// }

// console.log("Hi")

// Check if password length is greater than or equal to 6

function checkUserInput() {
  // 1. Get the password
  var passwordElement = document.getElementById("password");
  var passwordTyped = passwordElement.value;
  console.log(passwordTyped);

  // 2. Find the password length
  var passwordLength = passwordTyped.length;

  // 3. Check if password length is greater than or equal to 6
  // >: greater than, <: less than, >=: greater than or equal to
  if (passwordLength >= 6) {
    alert("Login success!");
    return true;
  } else {
    console.log("Password should be at least 6 characters");
    alert("Password should be at least 6 characters");
    return false;
  }
}

function createNewAccount() {
  alert("New account created!")
}