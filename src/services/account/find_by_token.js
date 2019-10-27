const Account = require('../../infrastructure/persistence/models/account');

module.exports = async (token) => {
  if (typeof token !== 'string') {
    throw Error('Missing token');
  }
  const account = await Account
    .query()
    .joinRelation('tokens')
    .where('tokens.id', token)
    .where('expiredAt', '>=', 'now()')
    .limit(1);

  return account ? account[0] : null;
};
