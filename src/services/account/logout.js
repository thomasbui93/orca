const { raw } = require('objection');
const Token = require('../../infrastructure/persistence/models/token');

module.exports.expireToken = async (token) => {
  if (typeof token !== 'string') {
    throw Error('Token is invalid');
  }
  const affectedToken = await Token
    .query()
    .findById(token)
    .patch({
      expiredAt: raw('now()'),
    })
    .returning('*');

  return affectedToken;
};

module.exports.expireAllToken = async (accountId) => {
  if (typeof accountId !== 'string') {
    throw Error('Token is invalid');
  }

  const affectedTokens = await Token
    .query()
    .patch({
      expiredAt: raw('now()'),
    })
    .where('accountId', accountId)
    .returning('*');

  return affectedTokens;
};
