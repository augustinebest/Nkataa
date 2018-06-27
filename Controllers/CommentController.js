var model = require('../Models/Comment');

exports.addComment = function(req, res) {
    res.json({message: 'i pray this work!'});
    console.log('Yay! This works fine!');
//     var data = {
//         name: req.body.name,
//         time: Date,
//         commentBody: req.body.commentBody,
//         user: req.body.user,
//         post: req.body.post
//     };

// model.create(data, function(err) {
//     if(err) {
//         res.json({err: err, message: 'this comment could not be created!'});
//     } else {
//         res.json({message: 'Comment was created Succesfully!'});
//     }
// })
}