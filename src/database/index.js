import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../model/Aluno';
import User from '../model/UserModel';

const models = [Aluno, User];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
