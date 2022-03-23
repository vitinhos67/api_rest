import express from 'express';
import tokenController from '../controller/Token';

const router = express.Router();

router.post('/', tokenController.store);

export default router;
