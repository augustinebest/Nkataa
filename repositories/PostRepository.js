let model = require('../Models/Post');
let BaseRepository = require('../repositories/BaseRepository');

function PostRepository() {

}

PostRepository.prototype = BaseRepository(model);

module.exports = new PostRepository();
