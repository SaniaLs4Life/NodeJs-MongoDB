var User = require('../models/user');

module.exports = {
    registerGet : function(req, res){
        res.render('register');
    },
    registerPost : function(req, res){
        var newUser = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        
        newUser.save(function(err){
            if(err){
                console.log('An error occured!\nError : ' + err);
            }else{
                res.redirect('userlist');
                console.log('User registered Successfuly!');
            }
        });
        console.log(newUser);
    }

};