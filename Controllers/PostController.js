var model = require('../Models/Post');

exports.deletePost = function(req, res) {
    console.log('The post have been deleted!');
    res.json({message: 'this is an error!'});
    // var option = {_id: req.params.id};
    // model.remove(option, function(err) {
    //     if(err) {
    //         res.json({err: err, message: 'This post cannot be deleted!'});
    //     }else {
    //         res.json({message: 'This post have been deleted!'});
    //     }
    // })
}


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

exports.updatePost = function(req, res){
    var id = req.params.id;
    var update = {
        postBody: req.body.postBody
    };
    model.findByIdAndUpdate(id, update, function(err){
        if(err) {
            res.json({err: err, message: 'Update error'});
        } else{
            res.json({message: update});
    }
    });
}