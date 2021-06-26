function logInFunction(){
    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("password").value;

    // Username should be a number of length 10
    if(isNaN(userName) == false){

        if(userName.length == 10){

            if(passWord.length >= 6){
                alert ("Login Successful");
            }
            else{
                alert ("Password should have atleast 6 characters");
            }
        }

        else{
            alert ("Mobile number must be 10 digits");
        }
    }
    
    else{
        alert ("Enter a valid mobile number");
    }
}