import express from 'express';
import userController from '../controller/userController';
import { verifiquedToken } from '../middleware/loginRequired';

const router = express.Router();

router.post('/', userController.store);
router.get('/', verifiquedToken, userController.show);

router.delete('/', verifiquedToken, userController.delete);
router.patch('/', verifiquedToken, userController.update);

export default router;

// REGRAS DE NEGOCIO

/*
INDEX -> LISTA TODOS USUARIOS: METHOD GET
SHOW -> MOSTRA USUARIOS -> METHOD GET
DELETE -> DELETA USUARIOS: METHOD DELETE
UPTADE -> ATULIZA DADOS DE USUARIOS: METHOD PATCH OU PUT
STORE/CREATE -> CRIA USUARIOS: METHOD POST
*/
