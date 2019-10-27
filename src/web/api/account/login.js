const login = require('../../../services/account/login');

const auth = async (req, res, next) => {
  try {
    const token = await login(req.body.email, req.body.password);
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
