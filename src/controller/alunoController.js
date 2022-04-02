/* eslint-disable no-inner-declarations */
import Aluno from '../model/Aluno';
import Photo from '../model/photo';

class Alunos {
  // eslint-disable-next-line consistent-return
  async store(req, res) {
    try {
      if (!req.body) {
        return res.status(401).json({
          error: 'E necessario digitar os dados',
        });
      }
      const aluno = await Aluno.create(req.body);

      if (!aluno) {
        return res.status(401).json({ error: ['Error'] });
      }

      res.send(aluno);
    } catch (e) {
      return res.status(401).json({
        error: e,
      });
    }
  }

  // eslint-disable-next-line consistent-return
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(401).json({ error: ['Precisa passar um ID na query'] });
      }
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          error: [`Nenhum aluno com o ID ${id} encontrado.`],
        });
      }

      aluno.destroy();
      return res.send('O aluno foi deletado com sucesso');
    } catch (e) {
      return res.status(401).json({
        e,
      });
    }
  }

  // eslint-disable-next-line consistent-return
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(401).json({ error: ['Precisa passar um ID na query'] });
      }
      const aluno = await Aluno.findOne({ where: { id } });

      if (!aluno) {
        return res.status(401).json({
          error: [`Nenhum aluno com o ID ${id} encontrado.`],
        });
      }

      const newUser = await Aluno.update(req.body);

      res.json(newUser);
    } catch (e) {
      console.log(e);
      return res.status(401).json({
        error: e,
      });
    }
  }

  // eslint-disable-next-line consistent-return
  async index(req, res) {
    try {
      const aluno = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },
      });
      res.send(aluno);
    } catch (e) {
      return res.status(401).json({
        e,
      });
    }
  }

  // eslint-disable-next-line consistent-return
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(401).json({ error: ['Precisa passar um ID na query'] });
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(401).json({
          error: [`Nenhum aluno com o ID ${id} encontrado.`],
        });
      }
      res.send(aluno);
    } catch (e) {
      return res.status(401).json({
        e,
      });
    }
  }
}

export default new Alunos();
