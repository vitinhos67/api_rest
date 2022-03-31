// import Aluno from '../model/Aluno';

class Home {
  async store(req, res) {
    try {
      res.send('OK HOME');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Home();
