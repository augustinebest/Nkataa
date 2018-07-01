let model = require('../Models/Comment');
let BaseRepository = require('../repositories/BaseRepository');

function CommentRepository () {

}

CommentRepository.prototype = BaseRepository(model);

module.exports = new CommentRepository();