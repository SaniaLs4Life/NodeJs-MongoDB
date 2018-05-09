var User = require('../models/user');

module.exports = {
    userList : function(req, res){
        User.find(function(err, data){
            if(err){
                console.log('Find Error!\nError : ' + err);
            }else{
                res.render('userlist', { users : data });
            }
        }); 
    }
}