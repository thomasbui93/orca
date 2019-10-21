const login = require('../../../services/account/login');

const login = async (req, res, next) => {
  try {
    const isCorrect = await login(req.body.email, req.body.password)
    res.json({
      status: isCorrect,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = create;