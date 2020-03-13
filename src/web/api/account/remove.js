const removeAccount = require('../../../services/account/remove');

const create = async (req, res, next) => {
  try {
    await removeAccount(req.params.id, req.user);
    res.json({
      status: true,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = create;
