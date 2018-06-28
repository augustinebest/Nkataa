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

exports.