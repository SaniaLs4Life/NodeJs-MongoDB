
var loginRoute = require('./loginRoutes');
var homeRoute = require('./homeRoutes');
var registerRoute = require('./registerRoutes');
var userListRoute = require('./userlistRoutes');




module.exports = function(app){
    app.use('/', homeRoute);
    app.use('/login', loginRoute);
    app.use('/register', registerRoute);
    app.use('/userlist', userListRoute);
}