const express = require('express');
const router = express.Router();

//import userController

const userController = require('../controllers/userController');

//import the required authorization

const auth = require('../auth');

//check if email exists

router.post('/email-exists', (req,res) => {
    userController.checkEmail(req.body).then(result => res.send(result));
})

//register a user
//http://localhost:4000/api/users

router.post('/register', (req,res) => {
    userController.register(req.body).then(result => res.send(result));
})

//get all users

router.get('/', (req, res) => {
    userController.getAllUsers().then(result => res.send(result));
})

//user login

router.post('/login', (req, res) => {
    userController.login (req.body).then(result => res.send(result));
})

//retrieving user information

//router.post('/details', auth.verify,(req,res) => {
router.post('/details', (req,res) => {
    //let userData = auth.decode (req.headers.authorization)
    userController.getProfile(userData).then (result => res.send(result));
    console.log(true)
})


module.exports = router;