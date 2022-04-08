"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _UserModel = require('../model/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

class TokenController {
  // eslint-disable-next-line consistent-return
  async store(req, res) {
    try {
      const { nome = '', email = '', password = '' } = req.body;

      if (!nome && !email) {
        return res.status(401).json({
          errors: ['E necessario digitar email e senha'],
        });
      }

      const user = await _UserModel2.default.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ['E-mail não encontrado!'],
        });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({
          errors: ['Senha invalida'],
        });
      }
      const { id } = user;
      const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({
        token,
        user: { nome: user.nome, id, email },
      });
    } catch (e) {
      console.log(e);
      return res.status(401).json({
        errors: ['Usuario Inexistente'],
      });
    }
  }
}
exports. default = new TokenController();
