import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome nao pode estar vazio',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail invalido',
          },

        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 55],
            msg: 'a SENHA precisa ter entre 6 a 50 caracteres',
          },

        },
      },
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      // eslint-disable-next-line no-param-reassign
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  checkPassword(passwordParam) {
    return bcryptjs.compare(passwordParam, this.password_hash);
  }
}
