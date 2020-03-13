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
      expiredAt: raw('NOW()'),
    })
    .returning('*');

  return affectedToken;
};

module.exports.expireAllToken = async (userId) => {
  if (typeof userId === 'undefined') {
    throw Error('userId is invalid');
  }

  const affectedTokens = await Token
    .query()
    .patch({
      expiredAt: raw('NOW()'),
    })
    .where('userId', userId)
    .returning('*');

  return affectedTokens;
};
