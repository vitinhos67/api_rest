import express from 'express';
import tokenController from '../controller/Token';
import { verifiquedToken } from '../middleware/loginRequired';

const router = express.Router();

router.post('/', tokenController.store);
router.get('/test', verifiquedToken);

export default router;
