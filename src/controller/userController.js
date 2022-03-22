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
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) {
        return res.send('Usuario não encontrado, tente colocar um usuario valido');
      }

      return res.json(user);
    } catch (e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) {
        return res.send('Usuario não encontrado, tente colocar um usuario valido');
      }
      res.redirect('/users');
      user.destroy();
    } catch (e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line consistent-return
  async update(req, res) {
    try {
      const param = req.params.id;
      if (!param) return res.status(200).json({ errors: ['Sem parametro'] });

      const user = await User.findByPk(param);
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
