//creating a constructor for base repository
function BaseRepository(model) {
    if(!model) throw new Error('A model must be provided!');
    this.model = model;
}

BaseRepository.prototype.add = function(data, callback) {
    this.model.create(data, callback);
}

BaseRepository.prototype.get = function(options, callback) {
    this.model.find(options, callback);
}

BaseRepository.prototype.delete = function(id, callback) {
    this.model.remove(id, callback);
}

module.exports = function(model) {
    return new BaseRepository(model);
}