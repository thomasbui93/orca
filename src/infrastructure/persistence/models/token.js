const { Model, ValidationError } = require('objection');
const User = require('./user');

class TokenModel extends Model {
  static get tableName() {
    return 'tokens';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tokens.user_id',
          to: 'users.id',
        },
      }
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
        expiredAt: { type: 'string', format: 'date-time' },
      },
    };
  }

  async $beforeInsert() {
    if (this.id || this.createdAt || this.expiredAt) {
      throw new ValidationError({
        message: 'Forbidden value',
        type: 'Error',
      });
    }
  }
}

module.exports = TokenModel;
