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
    try {
      const user = {
        id: req.userID,
        email: req.userEmail,
      };
      // const user = await User.findByPk(id);

      if (!user) {
        return res.send('Usuario não encontrado, tente colocar um usuario valido');
      }

      return res.json(user);
    } catch (e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async showUniqueID(req, res) {
    const { userId } = req.params;

    if (!userId) {
      return res.status(401).json({
        errors: ['Valor invalido, tente inserir um valor valido'],
      });
    }

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuario não encontrado'],
      });
    }

    return res.json({
      user,
    });
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

      const user = await User.findByPk(userHeader.id);

      if (!userHeader) {
        console.log('Parei no header');
        return res.status(401).json({
          errors: ['Ocorreu um error ao encontrar o usuario, tente mais tarde'],
        });
      }
      if (!user) {
        console.log('Parei no user');
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
      if (!user) return res.send({ errors: ['Usuario não encontrado'] });

      await user.update(req.body);

      return res.send('Os dados foram atualizados');
    } catch (e) {
      return res.status(400).json(
        { error: e.errors.map((err) => err.message) },
      );
    }
  }
}
export default new UserController();
