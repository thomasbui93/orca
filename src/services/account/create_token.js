const getValidTokens = require('./get_valid_tokens');

module.exports = async (account) => {
  if (!account) {
    throw Error('Missing accountId');
  }
  const validTokens = await getValidTokens(account.id);
  if (validTokens > 5) {
    throw Error('Too many requests for authenticated token.')
  }

  const token = await account
    .$relatedQuery('tokens')
    .insert({})
    .returning('*');
  delete token.account_id;
  return token;
}