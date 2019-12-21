const Account = require('../../infrastructure/persistence/models/account');

module.exports = async (id, user) => {
  if (!user) {
    throw new Error('user is missing when create account')
  }

  await Account.transaction(async (trx) => {
    await user
    .$relatedQuery('accounts')
    .unrelate()
    .where('accounts.id', id);

    await Account
      .query(trx)
      .deleteById(id);
  })

  return true;
};