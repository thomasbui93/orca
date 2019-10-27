const pingRouter = require('./api/health');
const accountRouter = require('./api/account');
const passport = require('passport');

const initialize = (app) => {
  app.use('/ping', passport.authenticate('bearer', { session: false }), pingRouter);
  app.use('/api/account', accountRouter);
};

module.exports = initialize;
