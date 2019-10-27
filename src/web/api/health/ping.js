const index = async (req, res, next) => {
  try {
    res.json({
      status: true,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = index;
