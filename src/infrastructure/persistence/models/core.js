/* eslint-disable class-methods-use-this */
const { Model } = require('objection');

class Core extends Model {
  get $secureFields() {
    return ['password'];
  }

  $formatJson(json, options) {
    const modifiedJson = super.$formatJson(json, options);
    this.$secureFields.forEach((key) => delete modifiedJson[key]);
    return modifiedJson;
  }
}

module.exports = Core;
