var express = require('express');

var router = express.Router();
var commentController1 = require('../Controllers1/CommentController');

router.post('/create', commentController1.addComment);
router.get('/delete/:id', commentController1.deleteComment);
module.exports = router;
