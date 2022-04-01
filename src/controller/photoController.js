import multer from 'multer';
import configMulter from '../config/multer';
import photoModel from '../model/photo';

const upload = multer(configMulter).single('foto');

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
        const photo = await photoModel.create({ originalname, filename, aluno_id });

        return res.json(photo);
      } catch (e) {
        return res.status(401).json({
          errors: ['Aluno nao existe'],
        });
      }
    });
  }
}

export default new Photo();
