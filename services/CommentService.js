let repository = require('../repositories/CommentRepository');

exports.addComment = function(req, res, data) {
    repository.add(data, function(err) {
        if(err) res.json({err: err});
        res.json({message: 'This comment have been added!'});
    })
}

exports.deleteComment = function(id, req, res) {
    repository.delete(id, function(err) {
        if(err) res.json({err: err});
        res.json({message: 'This Comment have been deleted!'});
    })
}