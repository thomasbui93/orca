const { setup } = require('./configuration/setup');
const connect = require('./configuration/storage');
const { start } = require('./configuration/server');

(async () => {
  setup();
  await connect();
  start();
})();
