const {expireToken, expireAllToken} = require('../../../services/account/logout');

const logout = async (req, res, next) => {
  try {
    const user = req.user;
    const cleanseAll = req.query && req.query.everywhere === '1';
    const token = req.query ? req.query.access_token: false;
    if (!token) {
      throw Error(`Invalid access_token in query!
        For now, we only support access_token in query string for logout.`
      );
    }
    
    if (cleanseAll) {
      const tokens = await expireAllToken(user.id);
      res.json({
        status: true,
        tokens
      })
    } else {
      const cleansedToken = await expireToken(token)
      res.json({
        status: cleansedToken.length === 1,
      })
    }
  } catch (err) {
    next(err);
  }
};

module.exports = logout;