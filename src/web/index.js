const pingRouter = require('./api/health');
const accountRouter = require('./api/account');

const initialize = (app) => {
  app.use('/ping', pingRouter);
  app.use('/api/account', accountRouter);
};

module.exports = initialize;
