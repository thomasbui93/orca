
exports.up = function(knex) {
  return knex
    .schema
    .createTable('accounts', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts');
};
