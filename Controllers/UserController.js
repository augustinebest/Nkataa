var model = require('../Models/User');

exports.addUser = function(req, res) {
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    model.create(data, function(err) {
        if(err) {
            res.json({err: err, message: 'the user could not be created'})
        } else {
            res.json({message: 'the user was created successfully'});
        }
    })
}

//lets get Users in the database
exports.getUsers = function(req, res) {
    model.find(function(err, users){
        if(err) {
            res,json({err: err, message:'Something went wrong'})
        } else {
            res.json(users);
        }
    })
}

//let us now delete a user in the database
exports.deleteUser = function(req, res) {
    var options = {_id: req.params.id};
    model.remove(options, function(err) {
        if(err) {
            res.json({err: err, message: 'The resource could not be deleted!'})
        } else {
            res.json({message: 'the resource was deleted!'})
        }
    })
}