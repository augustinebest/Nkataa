var model = require('../Models/Comment');

exports.addComment = function(req, res) {
    var data = {
        name: req.body.name,
        time: Date.now(),
        commentBody: req.body.commentBody,
        user: req.body.user,
        post: req.body.post
    };
}
model.create(data, function(err) {
    if(err) {
        res.json({err: err, message: 'this comment could not be deleted!'});
    } else {
        res.json(message: 'Comment was created Succesfully!');
    }
})