const createAccount = require('../../../services/account/create');

const create = async (req, res, next) => {
  try {
    await createAccount(req.body)
    res.json({
      status: true,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = create;