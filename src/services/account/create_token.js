module.exports = async (account) => {
  if (!account) {
    throw Error('Missing accountId');
  }
  const token = await account
    .$relatedQuery('tokens')
    .insert({})
    .returning('*');
  delete token.account_id;
  return token;
}