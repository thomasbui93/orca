
const Knex = require('knex');
const { Model, knexSnakeCaseMappers } = require('objection');
const knexConfig = require('../../../knexfile');

const connect = () => {
  const knex = Knex({
    ...knexConfig.development,
    ...knexSnakeCaseMappers()
  });
  Model.knex(knex);
};

module.exports = connect;
