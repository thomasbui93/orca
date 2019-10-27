const { connect } = require('./primary');
const { connectToRedis } = require('./cache');
const logger = require('../../infrastructure/logger/winston');

module.exports = async () => {
  try {
    await connect();
    await connectToRedis();
  } catch (err) {
    logger.error('Failed at setup storage', err);
  }
};
