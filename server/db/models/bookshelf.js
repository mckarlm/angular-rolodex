const knex = require('../knex');
const bookshelf = require('body-parser')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;