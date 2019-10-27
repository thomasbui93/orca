const Account = require('../../infrastructure/persistence/models/account');
const {compare} = require('../../infrastructure/persistence/hash');

module.exports = async (email, password) => {
  if (!email || !password) {
    throw Error('Missing login credential');
  }
  const account = await Account
    .query()
    .findOne({email});
  if (account) {
    return compare(password, account.password);
  } else {
    return false;
  }
}