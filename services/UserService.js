var repository = require('../repositories/UserRepository');

exports.addUser = function(data, req, res) {
    repository.add(data, function(err) {
        if(err) res.json({err: err});
        res.json({message: 'User have been created'});
    })
}

exports.getUsers = function(req, res) {
    repository.get({}, function(err, users) {
        if(err) res.json({err: err, message: 'Sorry, something went wrong'});
        res.json(users);
        // console.log('I am fucking tired!');
    })
}

exports.deleteUser = function(req, res, id) {
    repository.delete(id, function(err) {
        if(err) res.json({err: err});
        res.json({message: 'This post have been deleted!'});
    })
}

exports.getUserByParam = function(req, res, value) {
    repository.get(value, function(err, users) {
        if(err) res.json({err: err});
        res.json(users);
    })
}

exports.getUserId = function(id, req, res) {
    repository.getId(id, function(err, users) {
        if(err) res.json({err: err});
        res.json(users);
        // console.log(id);
    })
}