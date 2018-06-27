var model = ('../Models/User');

var baseRepository = require('../repositories/BaseRepository');

function userRepository() {

}

userRepository.prototype = baseRepository(model);

module.exports = new userRepository();