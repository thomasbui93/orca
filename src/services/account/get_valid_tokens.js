const Token = require('../../infrastructure/persistence/models/token');

module.exports = async (accountId) => {
  if (typeof accountId !== 'string') {
    throw Error('Account is invalid');
  }
  const validTokens = await Token
    .query()
    .where('accountId', accountId)
    .where('expiredAt', '>=', 'now()')
    .count();

  return validTokens;
}