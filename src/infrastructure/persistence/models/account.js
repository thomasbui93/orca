const { Model } = require('objection');
const { hash } = require('../hash');

class AccountModel extends Model {
  static get tableName() {
    return 'accounts';
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email'],

      properties: {
        id: { type: 'string' },
        firstName: { type: 'string', minLength: 1, maxLength: 255},
        lastName: { type: 'string', minLength: 1, maxLength: 255},
        password: { type: 'string', minLength: 6, maxLength: 255},
        email: { type: 'string', minLength: 1, maxLength: 255, format: 'email'},
        createdAt: {type: 'string', format: 'date-time'},
        updatedAt: {type: 'string', format: 'date-time'},
      }
    };
  }

  async $beforeInsert() {
    if (this.id) {
      throw new objection.ValidationError({
        message: 'identifier should not be defined before insert',
        type: 'Error'
      });
    }
    const hashedPassword = await hash(this.password);
    this.password = hashedPassword;
    this.createdAt = new Date().toISOString();
  }

  async $beforeUpdate() {
    if (this.password) {
      const hashedPassword = await hash(this.password);
      this.password = hashedPassword;
    }
    this.updatedat = new Date().toISOString();
  }
}

module.exports = AccountModel;