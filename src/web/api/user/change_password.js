const changePassword = require('../../../services/user/change_password');
const User = require('../../../infrastructure/persistence/models/user');
const { expireAllToken } = require('../../../services/user/logout');
const createToken = require('../../../services/user/create_token');

const updatePassword = async (req, res, next) => {
  try {
    const user = req.body ? await User.findByEmail(req.body.email) : false;
    const password = req.body ? req.body.password : false;

    await changePassword(user.id, password);
    await expireAllToken(user.id);
    const token = await createToken(user);

    res.json({
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = updatePassword;
