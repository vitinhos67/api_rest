"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _photo = require('../model/photo'); var _photo2 = _interopRequireDefault(_photo);

const upload = _multer2.default.call(void 0, _multer4.default).single('foto');

class Photo {
  store(req, res) {
    // eslint-disable-next-line consistent-return
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(401).json({
          errors: [error],
        });
      }

      try {
        const { originalname, filename } = req.file;

        const { aluno_id } = req.body;
        const photo = await _photo2.default.create({ originalname, filename, aluno_id });

        return res.json(photo);
      } catch (e) {
        return res.status(401).json({
          errors: ['Aluno nao existe', e],
        });
      }
    });
  }
}

exports. default = new Photo();
