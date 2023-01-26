const express = require('express');
const app = express();
const PORT = 4000;

//create the middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ROUTES
    //endpoints
    //requestlistener
    //http methods


let user = []

app.post("/signup", (req,res) => {

    let username = req.body.username;
    let pw = req.body.password;
    
    
    if (username !== "" && pw !== ""){
        users.push(req.body);
        res.send(`${username} successfully logged in`)
    }
    else{
        res.send('Please fill-out the complete information')
    }

}).listen(PORT, () => console.log (`Server running at the port ${PORT}`));

//update password - put method

app.put("/change-password", (req, res) => {
    let message = "";

    for(let i = 0; i < users.length; i++){
        if(req.body.username == users[i].username){
            users[i].password = req.body.password;
            message = `User ${req.body.username}'s has been updated`;

        }
        else{
            message = "User doesn't exist";
        }
    }
    console.log(users)
    res.send(message);
});

app.listen(PORT, () => console.log (`Server running at the port ${PORT}`));
