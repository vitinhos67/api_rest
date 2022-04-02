"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-inner-declarations */
var _Aluno = require('../model/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _photo = require('../model/photo'); var _photo2 = _interopRequireDefault(_photo);

class Alunos {
  // eslint-disable-next-line consistent-return
  async store(req, res) {
    try {
      if (!req.body) {
        return res.status(401).json({
          error: 'E necessario digitar os dados',
        });
      }
      const aluno = await _Aluno2.default.create(req.body);

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
      const aluno = await _Aluno2.default.findByPk(id);

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
      const aluno = await _Aluno2.default.findOne({ where: { id } });

      if (!aluno) {
        return res.status(401).json({
          error: [`Nenhum aluno com o ID ${id} encontrado.`],
        });
      }

      const newUser = await _Aluno2.default.update(req.body);

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
      const aluno = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_photo2.default, 'id', 'DESC']],
        include: {
          model: _photo2.default,
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
      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_photo2.default, 'id', 'DESC']],
        include: {
          model: _photo2.default,
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

exports. default = new Alunos();
