 var repository = require('../repositories/PostRepository');

exports.addPost = function(req, res, data) {
    repository.add(data, function(err) {
        if(err) res.json({err: err});
        res.json({message: 'This post have been added!'});
    })
}

exports.getPosts = function(req, res) {
    repository.get({}, function(err, posts){
        if(err) res.json({err: err});
        res.json(posts);
    })
}

exports.getPostByAUser = function(id, req, res) {
    repository.getId(id, function(err, post) {
        if(err) res.json({err: err});
        res.json(post);
    })
}

exports.deletePost = function(id, req, res) {
    repository.delete(id, function(err) {
        if(err) res.json({err: err});
        res.json({message: "This post have been deleted"});
    })
}

exports.updatePost = function(id, update, req, res) {
    repository.getUpdate(id, update, function(err) {
        if(err) res.json({err: err});
        res.json({message: "This post have been updated"});
    })
}