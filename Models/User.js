var mongoose = require('mongoose');
// var posts = require('../Models/Post');

var UserSchema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('User', UserSchema);

// var Schema = mongoose.Schema;
// var UserSchema = new Schema({

// });