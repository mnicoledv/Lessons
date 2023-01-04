const { head } = require("../routes/userRoutes");

console.log("Connected");

let registerForm = document.getElementById("registerUser");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById ('lastName').value;
    let emailAdd = document.getElementById('emailAdd').value;
    let password =  document.getElementById('password').value;
    let mobile = document.getElementById('mobileNo').value;
    let address = document.getElementById('address').value;
    
    if (password && mobile === 11) {
        fetch ("http://localhost:4000/api/users/email-exists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                "email":"email"
            })
        })
        .then (response => response.json())
        .then (data => {
            console.log(data);

            if (data)
            {
                fetch("http://localhost:4000/api/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        emailAdd: emailAdd,
                        password: password,
                        mobile: mobileNo,
                        address: address
                    })
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                
                })
            }

        })
    }

})