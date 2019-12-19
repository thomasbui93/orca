const passport = require('passport');
const pingRouter = require('./api/health');
const accountRouter = require('./api/account');
const userRouter = require('./api/user');

const initialize = (app) => {
  app.use('/ping', passport.authenticate('bearer', { session: false }), pingRouter);
  app.use('/api/account', accountRouter);
  app.use('/api/user', userRouter);
};

module.exports = initialize;
