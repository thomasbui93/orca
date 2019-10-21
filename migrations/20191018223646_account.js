
exports.up = function(knex) {
  return knex.schema
    .createTable('accounts', function (table) {
      table.increments('id').primary();
      table.string('email', 255).notNullable();
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('password', 255).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.unique('email');
    })
    .createTable('account_details', function(table) {
      table.integer('account_id').unsigned();
      table.foreign('account_id')
        .references('account.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.date('dob');
      table.string('address');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts')
};
