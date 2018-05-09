module.exports = {
    loginGet : function(req, res){
        res.render('login');
    },
    loginPost : function(req, res){
        console.log(req.body);
        res.render('login', {
            username: req.body.username,
            password : req.body.password
        });
    }
};






















