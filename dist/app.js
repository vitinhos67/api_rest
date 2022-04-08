"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _photo = require('./routes/photo'); var _photo2 = _interopRequireDefault(_photo);

const whitelist = [
  'http://localhost:3000',
];

const corsConfig = {
  origin(origin, callback) {
    let corsOptions;
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // eslint-disable-next-line no-unused-vars
      corsOptions = { origin: true };
      callback(null, true);
    } else {
      // eslint-disable-next-line no-unused-vars
      corsOptions = { origin: false };
      callback(new Error('Cors'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.disable('x-powered-by');
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'src', 'uploads')));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_cors2.default.call(void 0, corsConfig));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/token', _token2.default);
    this.app.use('/alunos/', _alunoRoutes2.default);
    this.app.use('/photos/', _photo2.default);
  }
}

exports. default = new App().app;
