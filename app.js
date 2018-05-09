var path = require('path');
var express = require('express');
var app = express();
var ejsLayout = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var db = require('./app_server/models/db');

//Ejs View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'))

//Ejs Layout
app.use(ejsLayout);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Public access
app.use('/public', express.static(path.join(__dirname, 'public')));


//Routing
require('./app_server/routes/routeManager')(app);

var User = require('./app_server/models/user');


//Inserting new user
/*
var newUser = new User({
    fullname: 'Hakan Genc',
    email: 'hakan@gmail.com',
    username: 'wequantez3',
    password: 'hakangenc1'
});

newUser.save(function(err){
    if(err){
        console.log('An error occured!\nError : ' + err);
    }else{
        console.log('User is registered successfuly!');
    }
});
*/


//Listening Port
var port = 8000;
app.listen(port, function(){
    console.log('App listening port on : ' + port);
});