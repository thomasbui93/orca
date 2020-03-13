const { raw } = require('objection');
const { v4 } = require('uuid');
const getValidTokens = require('./get_valid_tokens');

module.exports = async (user) => {
  if (!user) {
    throw Error('Missing userId');
  }
  const validTokens = await getValidTokens(user.id);
  if (validTokens > 5) {
    throw Error('Too many requests for authenticated token.');
  }

  const token = await user
    .$relatedQuery('tokens')
    .insert({
      value: v4(),
      expiredAt: raw('NOW() + INTERVAL 30 MINUTE'),
    })
    .returning('*');
  delete token.user_id;
  return token;
};
