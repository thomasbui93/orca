const { config } = require('dotenv');
config();

module.exports = {
  development: {
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
            console.log('Failed to create extension! uuid will fail');
          }
          done();
        })
      }
    },
  },
}