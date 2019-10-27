const { Model } = require('objection');
const Account = require('./account');

class TokenModel extends Model {
  static get tableName() {
    return 'tokens';
  }

  static get relationMappings() {
    return {
      account: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'tokens.account_id',
          to: 'accounts.id'
        }
      }
    };
  }

  static get jsonSchema () {
    return {
      type: 'object',

      properties: {
        id: { type: 'string' },
        createdAt: {type: 'string', format: 'date-time'},
        expiredAt: {type: 'string', format: 'date-time'},
      }
    };
  }

  async $beforeInsert() {
    if (this.id || this.createdAt || this.expiredAt) {
      throw new objection.ValidationError({
        message: 'Forbidden value',
        type: 'Error'
      });
    }
  }
}

module.exports = TokenModel;