const { head } = require("../routes/userRoutes");

console.log("Connected");

let registerForm = document.getElementById("registerUser");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById ('lname').value;
    let emailAdd = document.getElementById('emailAdd').value;
    let mobile = document.getElementById('mobileNo').value;
    let password =  document.getElementById('password').value;

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
                        firstName: fname,
                        lastName: lname,
                        emailAdd: emailAdd,
                        mobile: mobileNo,
                        password: password
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