import multer, { MulterError } from 'multer';
import path from 'path';

const randomNumber = () => Math.floor(Math.random() * 10000 + 10000);

export default {

  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new MulterError('O arquivo enviado não e aceito'));
    }
    return cb(null, true);
  },

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randomNumber()}${path.extname(file.originalname)}`);
    },
  }),
};
