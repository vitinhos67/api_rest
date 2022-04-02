import Sequelize, { Model } from 'sequelize';
import config from '../config/appConfig';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: ['Nome precisa ter ao menos 3 caracteres'],
          },

        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: ['Nome precisa ter ao menos 3 caracteres'],
          },

        },
      },

      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${config.url}${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,
      tableName: 'fotos',
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
