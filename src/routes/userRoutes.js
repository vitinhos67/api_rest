import express from 'express';
import userController from '../controller/userController';
import { auth } from '../middleware/loginRequired';

const router = express.Router();

router.post('/', userController.store);
router.get('/', auth, userController.show);
router.get('/all', userController.showAll);
router.delete('/', auth, userController.delete);
router.patch('/', auth, userController.update);

export default router;

// REGRAS DE NEGOCIO

/*
INDEX -> LISTA TODOS USUARIOS: METHOD GET
SHOW -> MOSTRA USUARIOS -> METHOD GET
DELETE -> DELETA USUARIOS: METHOD DELETE
UPTADE -> ATULIZA DADOS DE USUARIOS: METHOD PATCH OU PUT
STORE/CREATE -> CRIA USUARIOS: METHOD POST
*/
