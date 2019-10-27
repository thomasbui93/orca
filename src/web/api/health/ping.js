const { status } = require('../../../configuration/storage/primary');

const index = async (req, res, next) => {
  try {
    const postgresqlStatus = await status();
    res.json({
      postgresql: postgresqlStatus
    });
  } catch (err) {
    next(err);
  }
};

module.exports = index;
