module.exports = {
  development: {
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'orca_pass',
      database : 'orca'
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