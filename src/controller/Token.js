import jwt from 'jsonwebtoken';
import User from '../model/UserModel';

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

      const user = await User.findOne({ where: { email } });

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
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
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
export default new TokenController();
