console.log("Connected");

const express = require('express');
const mongoose = require ('mongoose');
const app = express ('');
const PORT = process.env.PORT || 4000;
const cors = require ('cors');

//CORS - cross origin resource sharing
//It is for browsers security features that restricts cross-origin http request with other servers abd specifies which domains access your resources

//import routes module

const userRoutes = require('./routes/userRoute');
const courseRoutes = require('./routes/courseRoute');

//mongodb connection and notification
mongoose.connect('mongodb+srv://mnicoledv:master1234@cluster0.nkfsp3d.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to the Database'));

//Middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//Routes

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

