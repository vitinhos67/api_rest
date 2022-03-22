import Aluno from '../model/Aluno';

class Home {
  async index(req, res) {
    try {
      const aluno = await Aluno.create({
        nome: 'test',
        sobrenome: 'dsa',
        email: 'dsad',
        idade: 3,
        peso: 3,
        altura: 2,
      });

      res.json(aluno);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Home();
