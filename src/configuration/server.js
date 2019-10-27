const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routers = require('../web');
const errorHandler = require('../infrastructure/middleware/error-handler');
const passportAuth = require('../infrastructure/authentication/passport_configuration');

const server = {
  start() {
    server.setupAuth();
    const app = express();
    const port = process.env.PORT;
    server.setupMiddleware(app);
    server.setupRouters(app);
    app.use(errorHandler);
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  },
  setupRouters(app) {
    routers(app);
  },
  setupMiddleware(app) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  },
  setupAuth() {
    passportAuth();
  },
};

module.exports = server;
