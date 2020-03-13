const User = require('../../infrastructure/persistence/models/user');
const { comparePassword } = require('../../infrastructure/persistence/hash');
const createToken = require('./create_token');

module.exports = async (email, password) => {
  if (!email || !password) {
    throw Error('Missing login credential');
  }
  const user = await User
    .query()
    .findOne({ email });
  if (user) {
    const isCorrected = await comparePassword(password, user.password);
    if (isCorrected) {
      const token = await createToken(user);
      return token;
    }
    return false;
  }
  return false;
};
