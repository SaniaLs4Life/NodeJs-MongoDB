var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    fullname: String,
    email: {type:String, required:true, unique:true},
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true}
});

var user = mongoose.model('User', userSchema);
module.exports = user;