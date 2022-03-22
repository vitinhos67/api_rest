import express from 'express';
import userController from '../controller/userController';

const router = express.Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.delete('/:id', userController.delete);
router.put('/:id', userController.update);

export default router;

// REGRAS DE NEGOCIO

/*
INDEX -> LISTA TODOS USUARIOS: METHOD GET
SHOW -> MOSTRA USUARIOS -> METHOD GET
DELETE -> DELETA USUARIOS: METHOD DELETE
UPTADE -> ATULIZA DADOS DE USUARIOS: METHOD PATCH OU PUT
STORE/CREATE -> CRIA USUARIOS: METHOD POST
*/
