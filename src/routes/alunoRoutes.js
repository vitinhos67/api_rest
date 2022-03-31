import express from 'express';
import alunoController from '../controller/alunoController';
import { auth } from '../middleware/loginRequired';

const router = express.Router();

router.get('/', alunoController.index); // LER
router.post('/', alunoController.store); // CRIAR
router.delete('/:id', auth, alunoController.delete); // DELETAR
router.put('/:id', auth, alunoController.update); // ATUALIZAR
router.get('/:id', auth, alunoController.show); // MOSTRAR

export default router;
