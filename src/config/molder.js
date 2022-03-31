import multer from 'multer';
import path from 'path';

const randomNumber = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randomNumber()}${path.extname(file.originalname)}`);
    },
  }),
};
