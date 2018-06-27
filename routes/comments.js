var express = require('express');

var router = express.Router();
var commentController = require('../Controllers/CommentController');

router.get('/create', commentController.addComment);
module.exports = router;
