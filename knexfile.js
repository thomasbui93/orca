const { config } = require('dotenv');
const logger = require('./src/infrastructure/logger/winston');
config();

module.exports = {
  production: {
    client: 'mysql',
    version: '7.2',
    connection: {
      host : process.env.SQL_HOST,
      user : process.env.SQL_USER,
      password : process.env.SQL_PASSWORD,
      database : process.env.SQL_DB,
    }
  },
}