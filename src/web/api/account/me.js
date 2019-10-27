const auth = async (req, res, next) => {
  try {
    res.json({
      user: req.user
    })
  } catch (err) {
    next(err);
  }
};

module.exports = auth;