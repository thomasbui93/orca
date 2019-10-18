
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../../../knexfile');

const connect = () => {
  const knex = Knex(knexConfig.development);
  Model.knex(knex);
};

module.exports = connect;
