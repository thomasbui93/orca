const {hash} = require('bcrypt');

module.exports = {
  hash: async (password) => {
    const saltRounds = 10;
    const hashedPassword = await new Promise((resolve, reject) => {
      hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
  
    return hashedPassword
  },
  compare: (plainTextPassword, hash) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainTextPassword, hash).then(function(res) {
        resolve(res)
      })
    })
  }
}