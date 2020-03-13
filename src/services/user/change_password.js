const User = require('../../infrastructure/persistence/models/user');
const passwordChecker = require('./password_checker');

module.exports = async (userId, password) => {
  passwordChecker(password);

  if (typeof userId === 'undefined') {
    throw Error('Invalid userId');
  }

  const updatedUser = await User
    .query()
    .patchAndFetchById(userId, { password });

  return updatedUser;
};
