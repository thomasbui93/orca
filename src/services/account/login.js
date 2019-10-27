const Account = require('../../infrastructure/persistence/models/account');
const {compare} = require('../../infrastructure/persistence/hash');
const createToken = require('./create_token');

module.exports = async (email, password) => {
  if (!email || !password) {
    throw Error('Missing login credential');
  }
  const account = await Account
    .query()
    .findOne({email});
  if (account) {
    const isCorrected = compare(password, account.password);
    if (isCorrected) {
      const token = await createToken(account);
      return token; 
    } else {
      return false
    }
  } else {
    return false;
  }
}