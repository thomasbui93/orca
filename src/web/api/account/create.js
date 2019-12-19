const createAccount = require('../../../services/account/create');

const create = async (req, res, next) => {
  try {
    const account = await createAccount(req.body);
    res.json({
      account
    });
  } catch (err) {
    next(err);
  }
};

module.exports = create;