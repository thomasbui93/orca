module.exports = async (account, user) => {
  if (!user) {
    throw new Error('user is missing when create account');
  }

  const newAccount = await user
    .$relatedQuery('accounts')
    .insert(account);

  return newAccount;
};
