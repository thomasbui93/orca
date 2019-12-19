const User = require('../../infrastructure/persistence/models/user');

module.exports = async (token) => {
  if (typeof token !== 'string') {
    throw Error('Missing token');
  }
  const user = await User
    .query()
    .joinRelation('tokens')
    .where('tokens.id', token)
    .where('expiredAt', '>=', 'now()')
    .limit(1);

  return user ? user[0] : null;
};
