const Token = require('../../infrastructure/persistence/models/token');

module.exports = async (userId) => {
  if (typeof userId === 'undefined') {
    throw Error('User is invalid');
  }
  const validTokens = await Token
    .query()
    .where('userId', userId)
    .where('expiredAt', '>=', 'now()')
    .count();

  return validTokens;
};
