"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _UserModel = require('../model/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

// eslint-disable-next-line import/prefer-default-export
 const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      errors: ['Não autorizado'],
    });
    return;
  }

  try {
    const [, token] = authorization.split(' ');
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await _UserModel2.default.findOne({
      where: {
        email,
        id,
      },
    });

    if (!user) {
      const newLocal = res.status(401).json({
        errors: ['Usuario não encontrado'],
      });
      // eslint-disable-next-line consistent-return
      return newLocal;
    }

    req.userID = id;
    req.userEmail = email;
  } catch (e) {
    console.log(e);
    res.status(401).json({
      errors: ['Não autorizado'],
    });
  }
  next();
}; exports.auth = auth;
