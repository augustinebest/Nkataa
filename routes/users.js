var express = require('express');
var router = express.Router();
var userController = require('../Controllers/UsersController');

/* GET users listing. */
router.post('/create', userController.addUser);

module.exports = router;
