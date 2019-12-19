
exports.up = function(knex) {
  return knex
    .schema
    .createTable('users', function (table) {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
      table.string('email', 255).notNullable();
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('password', 255).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.unique('email');
    })
    .createTable('accounts_users', function(table) {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
      table.uuid('account_id').references('accounts.id');
      table.uuid('user_id').references('users.id');
      table.integer('role').defaultTo(1);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.unique(['account_id', 'user_id'])
    })
};

exports.down = function(knex) {
  
};
