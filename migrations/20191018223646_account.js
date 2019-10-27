
exports.up = function(knex) {
  return knex
    .schema
    .createTable('accounts', function (table) {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
      table.string('email', 255).notNullable();
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('password', 255).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.unique('email');
    })
    .createTable('account_details', function(table) {
      table.uuid('account_id')
        .references('id')
        .inTable('accounts')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.date('dob');
      table.string('address');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts');
};
