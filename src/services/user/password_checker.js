
module.exports = (password) => {
  if (!password || password.length === 0) {
    throw Error('Empty password is forbidden.');
  }

  return true;
};
