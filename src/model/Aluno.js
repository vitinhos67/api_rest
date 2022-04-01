import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: ['Nome precisa ter ao menos 3 caracteres'],
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: ['Sobrenome precisa ter ao menos 3 caracteres'],
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: ['E-mail invalido'],
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {

            msg: ['Campo idade invalido'],
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {

            msg: ['Campo peso invalido'],
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: ['Campo altura invalido'],
          },
        },
      },
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'aluno_id' });
  }
}
