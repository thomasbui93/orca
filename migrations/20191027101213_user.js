
exports.up = function(knex) {
  return knex
    .schema
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('email', 255).notNullable();
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('password', 255).notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      table.unique('email');
    })
    .createTable('accounts_users', function(table) {
      table.increments('id').primary();
      table.integer('account_id').unsigned().notNullable().references('accounts.id');
      table.integer('user_id').unsigned().notNullable().references('users.id');
      table.integer('role').defaultTo(1);
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      table.unique(['account_id', 'user_id'])
    })
};

exports.down = function(knex) {
  
};
