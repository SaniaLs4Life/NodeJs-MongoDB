var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/NodeCrud';

mongoose.connect(mongoDB, function(err, db){
    if(err){
        console.log('An error occured!\nMongoDB : ' + err);
    }else{
        console.log('MongoDB connected successfuly!\nMongoDB : ' + mongoDB);
        
    }
});