import express from 'express';
import home from '../controller/home';

const router = express.Router();

router.get('/', home.index);

router.get('/home', (req, res) => {
  res.send('Esta roda ta sendo escrita');
});

export default router;
