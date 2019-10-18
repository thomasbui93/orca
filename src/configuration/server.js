const express = require('express');
const routers = require('../web');

const server = {
  start() {
    const app = express();
    const port = process.env.PORT;
    server.setupRouters(app);
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  },
  setupRouters(app) {
    routers(app);
  },
};

module.exports = server;
