var model = require('../Models/Post');

exports.addPost = function(req, res) {
    var data = {
        time : Date.now(),
        postBody : req.body.postBody,
        user : req.body.user
    };
    model.create(data, function(err){
        if(err) {
            res.json({err: err, message: 'Post could not be created'});
        } else {
            res.json({message: 'Post was created Successfully!'});
        }
    })
}

exports.getPosts = function(req, res) {
    model.find(function(err, posts) {
        if(err) {
            res.json({err: err, message: 'Something went wrong'});
        }else {
            res.json(posts);
        }
    });
}

exports.deletePost = function(req, res) {
    var  = {_id: req.params.id};
    model.remove(, function(req, res) {
        if(err) {
            res.json({err: err, message: 'This post cannot be deleted!'});
        }else {
            res.json({message: 'This post have been deleted!'});
        }
    })
}