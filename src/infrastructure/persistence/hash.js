const { hash, compare } = require('bcrypt');

module.exports = {
  hashPassword: async (password) => {
    const saltRounds = 10;
    const hashedPassword = await new Promise((resolve, reject) => {
      hash(password, saltRounds, (err, hashed) => {
        if (err) reject(err);
        resolve(hashed);
      });
    });

    return hashedPassword;
  },
  comparePassword: (plainTextPassword, hashedPassword) => new Promise((resolve) => {
    compare(plainTextPassword, hashedPassword).then((res) => {
      resolve(res);
    });
  }),
};
