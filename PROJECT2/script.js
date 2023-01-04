function checkPassword (){
    let password = document.getElementById
    ("password").value;
    let confrmPassword = document.getElementById
    ("confrm-password").value;
    console.log(password,confrmPassword);
    let message = document.getElementById("message");

    if (password.length != 0){
        if(password == confrmPassword){
            message.textContent = "Passwords match";
            message.style.backgroundColor = "green";
        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "red";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}
