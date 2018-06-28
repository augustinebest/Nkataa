var service = require('../services/UserService');

exports.addUser1 = function(req, res) {
    // res.json({message: 'this is freaking bad'});
    // console.log('what da fuck is this');
    var data = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        // posts : []
    }
    return service.addUser(data, req, res);
}

exports.getUsers = function(req, res) {
    return service.getUsers(req, res);
    
} 
exports.deleteUser = function(req, res) {
    let id = {_id: req.params.id};
    return service.deleteUser(req, res, id);
}

