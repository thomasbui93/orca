
const Knex = require('knex');
const { Model, knexSnakeCaseMappers } = require('objection');
const knexConfig = require('../../../knexfile');
const logger = require('../../infrastructure/logger/winston')

const knex = Knex({
  ...knexConfig.production,
  ...knexSnakeCaseMappers(),
});

module.exports.connect = () => {
  Model.knex(knex);
  knex.on('query', logger.info);
};

module.exports.status = async () => {
  const status = await knex.raw('select 1+1 as result');
  return !!status;
};
