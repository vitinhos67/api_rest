"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

const randomNumber = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {

  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new (0, _multer.MulterError)('O arquivo enviado não e aceito'));
    }
    return cb(null, true);
  },

  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path2.default.resolve(__dirname, '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randomNumber()}${_path2.default.extname(file.originalname)}`);
    },
  }),
};
