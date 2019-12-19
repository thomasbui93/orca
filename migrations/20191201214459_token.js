
exports.up = function(knex) {
  return knex
    .schema
    .createTable('tokens', function (table) {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
      table.uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('expired_at').defaultTo(knex.raw(`CURRENT_TIMESTAMP + INTERVAL '30 minutes'`));
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tokens');
};
