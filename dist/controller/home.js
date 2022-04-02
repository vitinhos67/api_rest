"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import Aluno from '../model/Aluno';

class Home {
  async index(req, res) {
    try {
      res.send('OK HOME');
    } catch (error) {
      console.log(error);
    }
  }
}

exports. default = new Home();
