var model = require('../Models/User');

exports.delete = function(req, res){
    //res.json(req.params.id);
    var options = {_id: req.params.id};
    model.remove(options, function(err) {
        if(err) {
            res.json({err: err, message: 'The resource could not be deleted!'})
        } else {
            res.json({message: 'the resource was deleted!'})
        }
    });

}

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

exports.getUserByParam = function(req, res) {
    var key = req.params.key;
    var value = req.params.value;
    switch(key) {
        case 'id':
        model.findById(value, '-password', function(err, data) {
            if(err) {
                res.json({err: err, message: 'Id not found'});
            } else {
                res.json({message: data});
            }
        });
        break;
        case 'email':
        model.findOne({email: value}, '-password', function(err, data) {
            if(err) {
                res.json({err: err, message: 'Email'})
            }
        })
    }
}