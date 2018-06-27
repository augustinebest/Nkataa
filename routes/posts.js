var express = require('express');

var router = express.Router();
var postController = require('../Controllers/PostController');

router.post('/create', postController.addPost);

module.exports = router;