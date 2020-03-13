const { status } = require('../../../configuration/storage/primary');
const { Redis } = require('../../../configuration/storage/cache');

const index = async (req, res, next) => {
  try {
    const sqlStatus = await status();
    const redisStatus = await Redis().ping();
    res.json({
      sql: sqlStatus,
      redis: redisStatus === 'PONG',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = index;
