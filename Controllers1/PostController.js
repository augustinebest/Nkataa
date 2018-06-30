// var model = require('Models/Post');
var service = require('../services/PostService');

exports.addPost = function(req, res) {
    let data = {
            time: Date.now(),
            postBody: req.body.postBody,
            user: req.body.user 
    };
    return service.addPost(req, res, data);
}

exports.getPosts = function(req, res) {
    return service.getPosts(req, res);
}

