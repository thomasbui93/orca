const Account = require('../../infrastructure/persistence/models/account');
const { comparePassword } = require('../../infrastructure/persistence/hash');
const createToken = require('./create_token');

module.exports = async (email, password) => {
  if (!email || !password) {
    throw Error('Missing login credential');
  }
  const account = await Account
    .query()
    .findOne({ email });
  if (account) {
    const isCorrected = await comparePassword(password, account.password);
    if (isCorrected) {
      const token = await createToken(account);
      return token;
    }
    return false;
  }
  return false;
};
