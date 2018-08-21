const bookshelf = require('./bookshelf');

class Contact extends bookshelf.Model {
  get tableName() { return 'contacts'; }
  get hasTimestamps() { return true }

  user() {
    return this.belongsTo('User', 'id', 'created_by');
  }
}

module.exports = bookshelf.model('Contact', Contact);