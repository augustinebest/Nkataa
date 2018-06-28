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

BaseRepository.prototype.get = function(value, callback) {
    this.model.find(value, '-password', callback);
}

BaseRepository.prototype.getId = function(id, callback) {
    this.model.findById(id, callback);
}

BaseRepository.prototype.getUpdate = function(id, update, callback) {
    this.model.findByIdAndUpdate(id, update, callback);
}

module.exports = function(model) {
    return new BaseRepository(model);
}