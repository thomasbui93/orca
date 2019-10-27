
const Knex = require('knex');
const { Model, knexSnakeCaseMappers } = require('objection');
const knexConfig = require('../../../knexfile');

const knex = Knex({
  ...knexConfig.production,
  ...knexSnakeCaseMappers(),
});

module.exports.connect = () => {
  Model.knex(knex);
  if (process.env.NODE_ENV !== 'production') {
    knex.on('query', (query) => {
      console.log(query)
    });
  }
};

module.exports.status = async () => {
  const status = await knex.raw('select 1+1 as result');
  return !!status;
};
