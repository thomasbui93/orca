
exports.up = function(knex) {
  return knex
    .schema
    .createTable('tokens', function (table) {
      table.increments('id').primary();
      table.string('value', 255).notNullable();
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('expired_at').defaultTo(knex.fn.now());
      table.unique(['value'])
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tokens');
};
