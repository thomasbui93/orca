const { connect } = require('./primary');

module.exports = async () => {
  try {
    connect();
  } catch (err) {
    console.log('Failed at setup storage', err);
  }
};
