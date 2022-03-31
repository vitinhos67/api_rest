import multer from 'multer';
import configMulter from '../config/multer';

const upload = multer(configMulter).single('foto');

class Photo {
  async store(req, res) {
    // eslint-disable-next-line consistent-return
    return upload(req, res, (error) => {
      if (error) {
        return res.status(401).json({
          errors: [error],
        });
      }

      return res.send(req.file);
    });
  }
}

export default new Photo();
