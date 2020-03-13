/* eslint-disable global-require */
const Model = require('./core');

class AccountModel extends Model {
  static get tableName() {
    return 'accounts';
  }

  static get relationMappings() {
    const User = require('./user');
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'accounts_users.user_id',
            to: 'accounts_users.account_id',
          },
          to: 'accounts.id',
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'string' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
    };
  }
}

module.exports = AccountModel;
