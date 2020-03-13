const login = require('../../../services/user/login');

const auth = async (req, res, next) => {
  try {
    const token = await login(req.body.email, req.body.password, req.body.account_id);
    if (token) {
      res.json({
        status: true,
        token,
      });
    } else {
      res.json({
        status: false,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = auth;
