const Account = require('../../infrastructure/persistence/models/account');

module.exports = async (accountId, password) => {
  if (typeof accountId !== 'string') {
    throw Error('Invalid accountId')
  }

  const updatedAccount = await Account
    .query()
    .patchAndFetchById(accountId, { password });

  return updatedAccount;
};
