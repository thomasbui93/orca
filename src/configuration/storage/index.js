const connectToPrimary = require('./primary');

module.exports = async () => {
  try {
    connectToPrimary();
  } catch (err) {
    console.log('Failed at setup storage', err);
  }
};
