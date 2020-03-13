const passport = require('passport');
const BearerStrategy = require('passport-http-bearer');
const findByToken = require('../../services/user/find_by_token');

module.exports = function () {
  passport.use(new BearerStrategy(
    ((token, done) => {
      findByToken(token).then((user, err) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      }, (err) => {
        if (err) { return done(err); }
        return done(null, false);
      });
    }),
  ));
};
