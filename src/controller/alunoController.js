import Aluno from '../model/Aluno';

class Alunos {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.send(alunos);
  }

  // eslint-disable-next-line consistent-return
  async store(req, res) {
    try {
      const aluno = await Aluno.create({
        nome: 'Victor',
        sobrenome: 'Santos',
        email: 'victor@email.com',
        idade: 17,
        peso: 60,
        altura: 1.90,
      });

      if (!aluno) {
        return res.status(401).json({ error: ['Error'] });
      }

      res.send(aluno);
    } catch (e) {
      return res.status(401).json({
        error: 'Email existente',
      });
    }
  }
}

export default new Alunos();
