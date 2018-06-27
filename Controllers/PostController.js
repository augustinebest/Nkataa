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
