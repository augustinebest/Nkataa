var express = require('express');

var router = express.Router();
var postController1 = require('../Controllers1/PostController');


// router.post('/create', postController1.addPost);
// router.get('/', postController1.getPosts);
router.get('/userPost/:id', postController1.getPostByAUser);
router.get('/delete/:id', postController1.deletePost);
router.post('/up/:id', postController1.updatePost);
/*
router.post('/create', postController.addPost);
router.get('/', postController.getPosts);
router.get('/de/:id', postController.deletePost);
router.post('/update/:id', postController.updatePost);
router.get('/userPost/:id', postController.getPostByAUser);
*/
module.exports = router;
