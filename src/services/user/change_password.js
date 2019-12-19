const User = require('../../infrastructure/persistence/models/user');

module.exports = async (userId, password) => {
  if (typeof userId !== 'string') {
    throw Error('Invalid userId')
  }

  const updatedUser = await User
    .query()
    .patchAndFetchById(userId, { password });

  return updatedUser;
};
