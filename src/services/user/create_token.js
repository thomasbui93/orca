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
    .insert({})
    .returning('*');
  delete token.user_id;
  return token;
};
