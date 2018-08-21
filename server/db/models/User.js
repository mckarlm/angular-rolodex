const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true }

  contact() {
    return this.hasMany('Contact', 'id', 'created_by');
  } 
}

module.exports = bookshelf.model('User', User);