import User from '../model/UserModel';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      console.log(user);

      const messageSuccess = `O cadastro foi feito com sucesso ${user.dataValues.nome}`;
      res.send(messageSuccess);
    } catch (e) {
      res.status(400).json(
        { error: e.errors.map((err) => err.message) },
      );
    }
  }

  async index(req, res) {
    try {
      const user = await User.findAll();
      res.json(user);
    } catch (e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async show(req, res) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        errors: ['Não e possivel acessar esta pagina'],
      });
    }

    try {
      const userHeader = {
        id: req.userID,
        email: req.userEmail,
      };
      const user = await User.findByPk(userHeader.id);

      if (!user) {
        return res.send('Usuario não encontrado, tente colocar um usuario valido');
      }

      const { email, id, nome } = user;

      return res.json({
        id,
        nome,
        email,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async delete(req, res) {
    try {
      /* O VALOR DESSA VARIAVEL VEM DO MIDDLEWARE DEFAULT,
      FAZENDO PARTE DE UMA VARIAVEL REQ */
      const userHeader = {
        id: req.userID,
        email: req.userEmail,
      };
      if (!userHeader) {
        return res.status(401).json({
          errors: ['Ocorreu um error ao encontrar o usuario, tente mais tarde'],
        });
      }

      const user = await User.findByPk(userHeader.id);

      if (!user) {
        return res.status(401).json({
          errors: ['Ocorreu um error ao encontrar o usuario, tente mais tarde'],
        });
      }

      res.json({
        success: ['Usuario deletado com sucesso.'],
      });
      user.destroy();
    } catch (e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userID);
      if (!user) {
        return res.status(401).json({ errors: ['Usuario não encontrado'] });
      }

      const newUser = await user.update(req.body);

      return res.json({
        user,
        newUser,
      });
    } catch (e) {
      return res.status(400).json(
        { error: e.errors.map((err) => err.message) },
      );
    }
  }
}
export default new UserController();
