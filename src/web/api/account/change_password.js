const changePassword = require('../../../services/account/change_password');
const { expireAllToken } = require('../../../services/account/logout');
const createToken = require('../../../services/account/create_token');

const updatePassword = async (req, res, next) => {
  try {
    const account = req.user;
    const password = req.body ? req.body.password : false;
    if (!password || password.length === 0) {
      throw Error('Empty password is forbidden.');
    }

    await changePassword(account.id, password);
    await expireAllToken(account.id);
    const token = await createToken(account);

    res.json({
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = updatePassword;