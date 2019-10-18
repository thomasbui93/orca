
exports.up = function(knex) {
  return knex.schema
    .createTable('accounts', function (table) {
       table.uuid('id').primary();
       table.string('email', 255).notNullable();
       table.string('first_name', 255).notNullable();
       table.string('last_name', 255).notNullable();
       table.timestamp('created_at').defaultTo(knex.fn.now());
       table.timestamp('updated_at').defaultTo(knex.fn.now());
       table.unique('email');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts')
};
