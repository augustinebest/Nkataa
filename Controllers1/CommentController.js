// let model = require('../Models/Comment');
let service = require('../services/CommentService');

exports.addComment = function(req, res) {
    let data = {
        time : Date.now(),
        commentBody : req.body.commentBody,
        user : req.body.user,
        post : req.body.post
    };
    return service.addComment(req, res, data);
}

exports.deleteComment = function(req, res) {
    let id = {_id : req.params.id};
    return service.deleteComment(id, req, res);
}