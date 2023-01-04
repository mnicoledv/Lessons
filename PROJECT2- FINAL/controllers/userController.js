//import the models

const User = require('./../models/User');

const bcrypt = require ('bcrypt');
const auth = require('../auth');

module.exports.checkEmail = (reqBody) => {
    const {email} = reqBody;

    return User.findOne({email:email}).then((result, error) => {
        if (result != null){
            return 'Email already exists'
        }
        else{
            if (result == null){
                return ("Saved");
            }
            else {
                return error
            }
        }
    })
}

module.exports.register = (reqBody) => {
    let newUser = new User({
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        email: reqBody.email,
        password: bcrypt.hashSync(reqBody.password, 10),
        mobileNo: reqBody.mobileNo,
        address: reqBody.address,
        isAdmin: reqBody.isAdmin
    });

    //save()

    return newUser.save().then((result, error) => {
        if(result){
            return result.redirect('../pages/login.html');
        }

        else{
            return error
        }
    })
}

module.exports.getAllUsers = () => {
    return User.find().then((result, error) => {
        if (result){
            return result
        }
        else{
            return error
        }
    })
}

module.exports.login = (reqBody) => {
    const {email, password} = reqBody;

    return User.findOne({email:email}).then((result, error) =>{
        if (result == null){
            return ("Incorrect Username or password");
        }
        else {
    
            let isPasswordCorrect =bcrypt.compareSync(password, result.password);

            if(isPasswordCorrect == true){
                return {access:auth.createAccessToken(result.redirect('../pages/login.html'))}
                //result.redirect('../pages/login.html')
            }

            else{
                return ("Incorrect Username or password");
            }

        }
    })
}

module.exports.getProfile = (data) => {
    const {id} = data;
    
    return User.findById(id).then((result, err) => {
        if (result != null)
        {
            result.password = "";
            return result
        }
        
        else {
            return false 
        }
    })
}
