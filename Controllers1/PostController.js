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

exports.getPostByAUser = function(req, res) {
    let id = {_id: req.params.id};
    return service.getPostByAUser(id, req, res);
}

exports.deletePost = function(req, res) {
    let id = {_id : req.params.id};
    return service.deletePost(id, req, res);
}

exports.updatePost = function(req, res) {
    let id = {_id: req.params.id};
    let update = {
        postBody: req.body.postBody,
    }
    return service.updatePost(id, update, req, res);
}