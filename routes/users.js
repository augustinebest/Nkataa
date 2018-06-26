var express = require('express');
var router = express.Router();
var userController = require('../Controllers/UserController');

/* GET users listing. */
router.post('/create', userController.addUser);
router.get('/de/:id', userController.delete);
// router.get('/delete/:id', userController.delete);
router.get('/', userController.getUsers);
router.get('/search/:key/:value', userController.getUserByParam);
router.get
module.exports = router;
