const passport = require('passport');
const BearerStrategy = require('passport-http-bearer');
const findByToken = require('../../services/account/find_by_token');

module.exports = function () {
  passport.use(new BearerStrategy(
    function(token, done) {
      findByToken(token).then((account, err) => {
        if (err) { return done(err); }
        if (!account) { return done(null, false); }
        return done(null, account, { scope: 'all' });
      }, (err) => {
        if (err) { return done(err); }
        return done(null, false);
      })
    }
  ));
}