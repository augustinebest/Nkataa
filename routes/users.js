var express = require('express');
var router = express.Router();
var userController1 = require('../Controllers1/UserController');

/* GET users listing. */
router.post('/create', userController1.addUser1);
router.get('/', userController1.getUsers);
router.get('/de/:id', userController1.deleteUser);
router.get('/search/', userController1.getUserByParam);
router.get('/check/:id', userController1.getUserId);
// router.get('/de/:id', userController.delete);
// router.get('/', userController.getUsers);
// router.get('/search/:key/:value', userController.getUserByParam);
// router.post('/up/:id', userController.updateUser);
module.exports = router;
