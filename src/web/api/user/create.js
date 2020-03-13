const createUser = require('../../../services/user/create');

const create = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.json({
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = create;
