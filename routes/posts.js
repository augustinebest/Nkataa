var express = require('express');

var router = express.Router();
var postController = require('../Controllers/PostController');

router.post('/create', postController.addPost);
router.get('/', postController.getPosts);
router.get('/de/:id', postController.deletePost);
module.exports = router;