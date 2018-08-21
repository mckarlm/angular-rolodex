
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('address');
    table.string('mobile');
    table.string('work');
    table.string('home');
    table.string('email').unique();
    table.string('twitter').unique();
    table.string('instagram').unique();
    table.string('github').unique();
    table.integer('created_by').references('id').inTable('users').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
