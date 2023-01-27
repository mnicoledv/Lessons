console.log("Connected");

const express = require('express');
const mongoose = require ('mongoose');
const app = express ('');
const PORT = process.env.PORT || 4000;
const cors = require ('cors');

//import routes module

const userRoutes = require('./routes/userRoutes');
const { reset } = require('nodemon');

//mongodb connection and notification
mongoose.connect('mongodb+srv://mnicoledv:master1234@project2database.q2pdvxt.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true});
// mongoose.set('strictQuery', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to the Database'));


//Middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//Routes
app.use('/api/users', userRoutes);

// app.get('/register', (req,res) => {
//     res.render('register.ejs')
// })

// app.post('/register' async (req,res) => {
//     try{
//         const hashed
//     }
// })

app.get("/", (req,res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    })
    return res.redirect('../pages/index.html');
}).listen(PORT, () => console.log(`Server running at port ${PORT}`));

