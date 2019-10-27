const { connect } = require('./primary');
const { connectToRedis } = require('./cache');

module.exports = async () => {
  try {
    await connect();
    await connectToRedis();
  } catch (err) {
    console.log('Failed at setup storage', err);
  }
};
