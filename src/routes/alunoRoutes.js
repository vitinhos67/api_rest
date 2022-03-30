import express from 'express';
import alunoController from '../controller/alunoController';

const router = express.Router();

router.get('/', alunoController.index);
router.post('/', alunoController.store);

export default router;
