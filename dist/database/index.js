"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../model/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _UserModel = require('../model/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);
var _photo = require('../model/photo'); var _photo2 = _interopRequireDefault(_photo);

const models = [_Aluno2.default, _UserModel2.default, _photo2.default];
const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
