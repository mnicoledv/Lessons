const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require ('mongoose');
//create a middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 1. connect server to MongoDB atlas
// 2. login to mongoDB atlas
// 3. click connect (beside Cluster0)
// 4. choose connect to your application

mongoose.connect('mongodb+srv://mnicoledv:master1234@cluster0.nkfsp3d.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true});


    //useNewUrlParser - a flag that allows users to fallback to the old parser if they find a bug in the new parser.

    // -need to be set to true unless there are instances that prevents you to connect.

    //useUnifiedTopology: default is false

    //set to true to opt in using mongoDB driver's new connection management engine

// 5. get a notification if successful or not
const db = mongoose.connection;
db.on('error', console.error.bind
(console, "connection error:"));

db.once('open', () => console.log("Connected to database"));

// 6. Creation of Schema
    //Schema - defines how data is organized within a relational database
    //      - included logical constraints such as table names, fields, data types and the relationship between the entities

const taskSchema = new mongoose.Schema(
    {
        name:String,
        status: {
            type: String,
            default: "pending"
        }
    }
);

// 7. Creation of models
const Task = mongoose.model("Task", taskSchema);

// Routes

/*
    Business logic: 
    1. add a functionality to check if there are duplicate task
        - if task already exist in the database, we return an error
        - if task doesnt exist in the database, we add it in the database
    2. The task data will be coming from the request body
    3. Create a new task object within a "name" field proprty
    4. The "status" property does not need to be provided because our schema default is pending upon creation of the project
*/

app.post('/tasks', (req,res) => {

    Task.findOne({name:req.body.name}, (err, result) => {
        if (result != null && result.name == req.body.name) 
        {
            return res.send("Duplicate task found");
        }

        else
        {
            let newTask = new Task({
                name: req.body.name
            });

            newTask.save((err, savedTask) => {
                if(err){
                    return console.error(err)
                }
                else{
                    return res.send("New Task created");
                }

            });
        }
    }

    )

});

/*

    Business Logic: 
    1. Retrieve all documents
    2. If an error is encountered, print the error
    3. If no errors are found, send back to the client/postman array of the documents

*/

app.get('/tasks', (req,res) => {
    //Model method
    Task.find({}, (error,result) => {
        if(error){
            return console.log(error)
        }
        else{
            return res.send(result)
        }
    });

});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));



