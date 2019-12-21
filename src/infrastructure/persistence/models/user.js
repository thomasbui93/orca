const { Model, ValidationError } = require('objection');
const { hashPassword } = require('../hash');
const Account = require('./account');

class UserModel extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const Token = require('./token');
    return {
      tokens: {
        relation: Model.HasManyRelation,
        modelClass: Token,
        join: {
          to: 'tokens.user_id',
          from: 'users.id',
        },
      },
      accounts: {
        relation: Model.ManyToManyRelation,
        modelClass: Account,
        join: {
          from: 'accounts.id',
          through: {
            from: 'accounts_users.userId',
            to: 'accounts_users.accountId',
            extra: ['role']
          },
          to: 'users.id'
        }
      }
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email', 'password'],
      properties: {
        id: { type: 'string' },
        firstName: { type: 'string', minLength: 1, maxLength: 255 },
        lastName: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 6, maxLength: 255 },
        email: {
          type: 'string', minLength: 1, maxLength: 255, format: 'email',
        },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
    };
  }

  async $beforeInsert() {
    if (this.id) {
      throw new ValidationError({
        message: 'identifier should not be defined before insert',
        type: 'Error',
      });
    }
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
    this.createdAt = new Date().toISOString();
  }

  async $beforeUpdate() {
    if (this.password) {
      const hashedPassword = await hashPassword(this.password);
      this.password = hashedPassword;
    }
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = UserModel;