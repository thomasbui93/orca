const Account = require('../../infrastructure/persistence/models/account');

module.exports = async (account) => {
  const newAccount = await Account
    .query()
    .insert(account);
  
  return newAccount;
}