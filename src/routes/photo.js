import express from 'express';
import photoController from '../controller/photoController';
import { auth } from '../middleware/loginRequired';

const router = express.Router();

router.post('/', auth, photoController.store);

export default router;
