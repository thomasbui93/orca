const { config } = require('dotenv');
const logger = require('./src/infrastructure/logger/winston');
config();

module.exports = {
  production: {
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.POSTGRESQL_HOST,
      user : process.env.POSTGRESQL_USER,
      password : process.env.POSTGRESQL_PASSWORD,
      database : process.env.POSTGRESQL_DB,
    },
    pool: {
      afterCreate: function (conn, done) {
        conn.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";', function (err) {
          if (err) {
            logger.error('Failed to create extension! uuid will fail');
          }
          done();
        })
      }
    },
  },
}