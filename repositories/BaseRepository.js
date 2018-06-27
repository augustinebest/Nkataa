//creating a constructor for base repository
function BaseRepository(model) {
    if(!model) throw new Error('A model must be provided!');
    this.model = model;
}

BaseRepository.prototype.add = function(option, structure, callback) {
    this.model.find(option, structure, callback);
}
module.exports = function(model) {
    return new BaseRepository(model);
}