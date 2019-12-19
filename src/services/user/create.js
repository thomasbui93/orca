const User = require('../../infrastructure/persistence/models/user');

module.exports = async (user) => {
  const newUser = await User
    .query()
    .insert(user);

  return newUser;
};
